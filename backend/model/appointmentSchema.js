const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema(
	{
		date: {
			type: Date,
			required: true,
		},
		time: {
			type: Number,
			required: true,
		},
		length: {
			type: Number,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		service: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
		},
		phone: {
			type: String,
		},
		lawyer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
	},
	{ timestamps: true }
)

const Appointment = mongoose.model("Appointment", appointmentSchema)

module.exports = Appointment
