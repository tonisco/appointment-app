const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../model/userSchema")

const protect = asyncHandler(async (req, res, next) => {
	let token

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try {
			token = req.headers.authorization.split(" ")[1]
			const verified = await jwt.verify(token, process.env.JWT_SECRET)

			req.user = await User.findById(verified.id).select("-password")

			next()
		} catch (error) {
			res.status(401)
			throw new Error("Not authorized, token failed")
		}
	} else {
		res.status(401)
		throw new Error("No token sent, login to get token")
	}
})

const admin = asyncHandler(async (req, res, next) => {
	if (!req.user.isAdmin) {
		res.status(401)
		throw new Error("Not authorised")
	}
	next()
})

module.exports = { protect, admin }
