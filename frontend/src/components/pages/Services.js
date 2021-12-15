import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllLawyers } from "../../redux/actions/userActions"
import { toastError, toastSuccess } from "../utils/Toast"
import { getAppointmentDates, createAppointment } from "../../redux/actions/appoinmentAction"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import {
	APPOINTMENTS_CREATE_CLEAR,
	APPOINTMENTS_DATE_CLEAR,
} from "../../redux/constants/appointmentConstant"
import { ALL_LAWYERS_CLEAR } from "../../redux/constants/userConstants"

const Services = () => {
	const [startDate, setStartDate] = useState("")

	const [fname, setFName] = useState("")
	const [lname, setLName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [time, setTime] = useState("")
	const [length, setLength] = useState(1)
	const [lengthOption, setLengthOption] = useState([])
	const [service, setService] = useState("")
	const [location, setLocation] = useState("")
	const [comment, setComment] = useState("")
	const [lawyer, setLawyer] = useState("")
	const [allLawyer, setAllLawyer] = useState([])
	const [disabledTime, setDisabledTime] = useState([12])

	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.user)
	const { loading, lawyers, error } = useSelector((state) => state.lawyers)
	const { loading: createLoading, message, error: createError } = useSelector(
		(state) => state.appointmentCreate
	)
	const { loading: appointmentLoading, date, error: appointmentError } = useSelector(
		(state) => state.appointmentDate
	)

	const navigate = useNavigate()

	const isWeekday = (date) => {
		const day = date.getDay()
		return day !== 0 && day !== 6
	}

	// show error notification for creating appointment
	useEffect(() => {
		if (createError) {
			toastError(createError)
			dispatch({ type: APPOINTMENTS_CREATE_CLEAR })
		}
	}, [createError, dispatch])

	// show error notification for creating appointment
	useEffect(() => {
		if (message) {
			toastSuccess(message)
			dispatch({ type: APPOINTMENTS_CREATE_CLEAR })
		}
	}, [message, dispatch])

	// set length of meeting
	useEffect(() => {
		let option = []
		if (time) {
			if (!disabledTime.includes(time + 1) && !(time + 1 > 17)) {
				option.push(2)
				if (!disabledTime.includes(time + 2) && !(time + 2 >= 18)) {
					option.push(3)
				}
			}
		}
		setLengthOption(option)
	}, [time, disabledTime])

	// clearing the time after changing the date value
	useEffect(() => {
		setTime("")
		setLength(1)
	}, [startDate])

	// set disabled time
	useEffect(() => {
		if (startDate) {
			let newdisable = [12]
			let todayDate = new Date().toISOString().split("T")[0]
			let pickedDate = moment(startDate).format("YYYY-MM-DD")
			let hour = new Date().getHours()

			if (hour >= 8 && todayDate === pickedDate) {
				for (let i = 8; i <= hour; i++) {
					newdisable.push(i)
				}
			}

			if (date) {
				date.map((i) => {
					let items = []
					for (let j = 1; j <= i.length; j++) {
						items.push(i.time + j - 1)
					}
					newdisable = [...newdisable, ...items]
				})
			}

			setDisabledTime(newdisable)
			setTime("")
			setLength(1)
		}
	}, [date, startDate])

	// get all available lawyers
	useEffect(() => dispatch(getAllLawyers()), [dispatch])

	// get all current appointment time
	useEffect(() => {
		if (startDate) {
			let sdate = moment(startDate).toISOString()
			let edate = moment(startDate).add(1, "d").toISOString()

			if (lawyer !== "") {
				dispatch(getAppointmentDates(lawyer, sdate, edate))
			}
		}
	}, [startDate, lawyer, dispatch])

	// set all layers option
	useEffect(() => {
		if (lawyers) {
			setAllLawyer(lawyers)
		}
	}, [lawyers])

	// check all get lawyers error
	useEffect(() => {
		if (error) {
			toastError(error)
			dispatch({ type: ALL_LAWYERS_CLEAR })
		}
	}, [error, dispatch])

	// check all get all current appointment time error
	useEffect(() => {
		if (appointmentError) {
			toastError(appointmentError)
			dispatch({ type: APPOINTMENTS_DATE_CLEAR })
		}
	}, [appointmentError, dispatch])

	// give contact details user values
	useEffect(() => {
		if (user) {
			setFName(user.name.split(" ")[0])
			setLName(user.name.split(" ")[1])
			setEmail(user.email)
		}
	}, [user])

	const sendAppointment = (e) => {
		e.preventDefault()
		if (!user) {
			toastError("You have to Login to make an appointment")
			return navigate("/login")
		}
		if (!startDate) toastError("Pls pick a date")
		else {
			if (!time) toastError("Pls pick a time")
			else {
				if (!lawyer) toastError("Pls pick a Lawyer")
				else {
					let chosenDate = moment(startDate)
						.add(+time, "h")
						.toISOString()
					dispatch(
						createAppointment({
							phone,
							email,
							time,
							length,
							service,
							location,
							comment,
							lawyer,
							date: chosenDate,
						})
					)
					if (!user) {
						setFName("")
						setLName("")
						setEmail("")
					}
					setDisabledTime([12])
					setPhone("")
					setTime("")
					setLawyer("")
					setLength()
					setService("")
					setLocation("")
					setComment("")
				}
			}
		}
	}

	return (
		<>
			<ToastContainer />
			<div className="flex flex-col">
				<div className="services text-center py-10">
					<h1 className="text-6xl text-white font-bold">Book An Appointment</h1>
					<p className="text-md mt-4 text-white font-bold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia
						quibusdam aut porro explicabo
					</p>
				</div>
				<form className="container max-w-4xl self-center my-10" onSubmit={sendAppointment}>
					<h3 className="text-3xl my-6 font-semibold"> Contact Form</h3>
					<div className="grid grid-cols-2 gap-x-16 gap-y-5 w-full">
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="fname" className="text-xl">
								First Name
							</label>
							<input
								type="text"
								id="fname"
								className="bg-gray-200 h-10 p-2 focus:outline-none "
								placeholder="First Name"
								required
								value={fname}
								onChange={(e) => setFName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="lname" className="text-xl">
								Last Name
							</label>
							<input
								type="text"
								id="lname"
								className="bg-gray-200 h-10 p-2 focus:outline-none "
								placeholder="Last Name"
								required
								value={lname}
								onChange={(e) => setLName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="phoe" className="text-xl">
								Phone
							</label>
							<input
								type="text"
								id="phone"
								className="bg-gray-200 h-10 p-2 focus:outline-none "
								placeholder="Phone"
								required
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="email" className="text-xl">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="bg-gray-200 h-10 p-2 focus:outline-none "
								placeholder="Email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<h3 className="text-3xl my-6 font-semibold"> Appointment Details</h3>
					<div className="grid grid-cols-2 gap-x-16 gap-y-5 w-full">
						<div className="flex flex-col gap-2 w-full">
							<label className="text-xl">Date</label>
							<DatePicker
								selected={startDate}
								minDate={moment().toDate()}
								filterDate={isWeekday}
								onChange={(date) => setStartDate(date)}
								className="bg-gray-200 h-10 p-2 focus:outline-none w-full"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-xl">Lawyer</label>
							<select
								className="bg-gray-200 h-10 p-2 focus:outline-none w-full"
								value={lawyer}
								disabled={loading}
								required
								onChange={(e) => setLawyer(e.target.value)}
							>
								<option value="">Select Lawyer</option>
								{allLawyer.map((law, i) => (
									<option key={i} value={law._id}>
										Barr. {law.name}
									</option>
								))}
							</select>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-xl">Time</label>
							<select
								className="bg-gray-200 h-10 p-2 focus:outline-none w-full"
								value={time}
								required
								disabled={appointmentLoading}
								onChange={(e) => setTime(+e.target.value)}
							>
								<option value="">Select Time</option>
								{[...new Array(10)].map((_, i) => {
									const hour = i + 8
									const day = hour - 12
									return (
										<option
											key={hour}
											value={hour}
											disabled={disabledTime.includes(hour)}
										>
											{day > 0 ? `${day}:00 PM` : `${hour}:00 AM`}
										</option>
									)
								})}
							</select>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-xl">Length</label>
							<select
								className="bg-gray-200 h-10 p-2 focus:outline-none w-full"
								value={length}
								required
								onChange={(e) => setLength(+e.target.value)}
							>
								<option value={1}>1 hr</option>
								{lengthOption?.map((len) => (
									<option value={len} key={len}>
										{len} hrs
									</option>
								))}
							</select>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-xl">Service</label>
							<select
								className="bg-gray-200 h-10 p-2 focus:outline-none w-full"
								value={service}
								required
								onChange={(e) => setService(e.target.value)}
							>
								<option value="">Select Service</option>
								<option value="Family Matters">Family Matters</option>
								<option value="Work Injury">Work Injury</option>
								<option value="Business Consultation">Business Consultation</option>
								<option value="Criminal Cases">Criminal Cases</option>
								<option value="Civil Cases">Civil Cases</option>
								<option value="Real Estate">Real Estate</option>
							</select>
						</div>

						<div className="flex flex-col gap-2 w-full">
							<label className="text-xl">Location</label>
							<select
								className="bg-gray-200 h-10 p-2 focus:outline-none w-full"
								value={location}
								required
								onChange={(e) => setLocation(e.target.value)}
							>
								<option value="">Select Location</option>
								<option value="Office">Office</option>
								<option value="Online">Online</option>
							</select>
						</div>
						<div className="flex flex-col gap-2 w-full col-span-2">
							<label className="text-xl">Comment</label>
							<textarea
								className="bg-gray-200 p-2 focus:outline-none w-full"
								rows="6"
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={createLoading}
						className="mt-5 bg-yellow-700 px-6 py-3 text-white font-semibold hover:bg-yellow-800 transition rounded-md"
					>
						Book Now
					</button>
				</form>
			</div>
		</>
	)
}

export default Services
