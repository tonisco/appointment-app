const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const User = require("../model/userSchema")
const getToken = require("../utils/token")

const register = asyncHandler(async (req, res) => {
	let { name, email, password, isAdmin } = req.body
	const userExist = await User.findOne({ email })
	if (!userExist) {
		const salt = await bcrypt.genSalt(10)
		password = await bcrypt.hash(password, salt)

		const user = await User.create({ name, email, password, isAdmin })
		return res.status(200).json({
			name: user.name,
			id: user._id,
			email: user.email,
			isAdmin: user.isAdmin,
			token: getToken(user._id),
		})
	} else {
		throw new Error("Email is already been used")
	}
})

const login = asyncHandler(async (req, res) => {
	let { email, password } = req.body
	const userExist = await User.findOne({ email })
	if (!userExist) {
		throw new Error("Wrong username or password")
	}

	const validPassword = await bcrypt.compare(password, userExist.password)
	if (!validPassword) throw new Error("Wrong username or password")

	return res.status(200).json({
		name: userExist.name,
		id: userExist._id,
		isAdmin: userExist.isAdmin,
		email: userExist.email,
		token: getToken(userExist._id),
	})
})

const allLawyers = asyncHandler(async (req, res) => {
	const lawyers = await User.find({ isAdmin: true }).select("name")
	console.log(lawyers)
	res.status(200).json({ lawyers })
})

module.exports = { register, login, allLawyers }
