const { Router } = require("express")
const {
	createAppointment,
	deleteAppointment,
	getAppointments,
	getAppointmentsDate,
} = require("../controllers/appointmentController")
const { protect, admin } = require("../auth/auth")

const router = Router()

router
	.route("")
	.get(protect, admin, getAppointments)
	.post(protect, createAppointment)
	.delete(protect, admin, deleteAppointment)

router.get("/dates", getAppointmentsDate)

module.exports = router
