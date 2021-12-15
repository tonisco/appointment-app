const asyncHandler = require("express-async-handler")
const Appointment = require("../model/appointmentSchema")
const User = require("../model/userSchema")

const createAppointment = asyncHandler(async (req, res) => {
	const { date, time, service, lawyer, location, comment, length, phone } = req.body
	console.log(comment)

	await Appointment.create({
		date,
		time,
		service,
		length,
		lawyer,
		location,
		comment,
		phone,
		user: req.user._id,
	})

	return res.status(201).json("Appointment created")
})

const getAppointments = asyncHandler(async (req, res) => {
	const { page } = req.query

	const pageLimit = 10

	const skip = (+page - 1) * pageLimit

	const totalNumber = await Appointment.countDocuments({
		lawyer: req.user._id,
		date: { $gt: new Date() },
	})

	const online = await Appointment.countDocuments({
		lawyer: req.user._id,
		date: { $gt: new Date() },
		location: "Online",
	})

	const office = await Appointment.countDocuments({
		lawyer: req.user._id,
		date: { $gt: new Date() },
		location: "Office",
	})

	const appointments = await Appointment.find({ lawyer: req.user._id, date: { $gt: new Date() } })
		.skip(skip)
		.limit(pageLimit)
		.sort({ date: "asc", time: "asc" })

	await User.populate(appointments, { path: "user" })
	const totalPages = Math.ceil(totalNumber / pageLimit)
	return res.status(200).json({ appointments, totalPages, page, totalNumber, online, office })
})

const deleteAppointment = asyncHandler(async (req, res) => {
	const { id } = req.query

	const appointment = await Appointment.findOne({ id, lawyer: req.user._id })
	if (!appointment) throw new Error("Appointment not found")
	await appointment.remove()

	return res.status(200)
})

const getAppointmentsDate = asyncHandler(async (req, res) => {
	const { sdate, edate, lawyer } = req.query

	const appointments = await Appointment.find({
		date: { $gte: new Date(sdate), $lte: new Date(edate) },
		lawyer,
	}).select("time length")

	return res.status(200).json(appointments)
})

module.exports = { createAppointment, getAppointments, deleteAppointment, getAppointmentsDate }
