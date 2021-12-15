import React, { useEffect, useState } from "react"
import moment from "moment"
import { AiOutlineClose } from "react-icons/ai"
import { FaTrashAlt, FaRegCalendarCheck, FaMapMarkerAlt, FaCommentAlt } from "react-icons/fa"
import { BsPersonFill, BsBriefcaseFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { deleteAppointment, getAppointment } from "../../redux/actions/appoinmentAction"
import { useSearchParams } from "react-router-dom"
import Toast, { toastError, toastSuccess } from "./Toast"
import { APPOINTMENTS_DELETE_CLEAR } from "../../redux/constants/appointmentConstant"

const DetailsCard = ({ detailsId, setDetailsOpen }) => {
	const [details, setDetails] = useState(null)
	const { appointment } = useSelector((state) => state.appointmentGet)
	const { appointment: appointmentDelete, error: deleteError } = useSelector(
		(state) => state.appointmentDelete
	)
	const dispatch = useDispatch()

	const [params] = useSearchParams()

	const deleteAppoint = () => {
		dispatch(deleteAppointment(details._id))
		setDetailsOpen(false)
		let page = params.get("page") || 1
		dispatch(getAppointment(page))
	}

	useEffect(() => {
		if (detailsId && appointment) {
			const item = appointment?.appointments.find((item) => item._id === detailsId)
			setDetails(item)
		}
	}, [appointment, detailsId])

	useEffect(() => {
		if (deleteError) {
			toastError(deleteError)
			dispatch({ type: APPOINTMENTS_DELETE_CLEAR })
		}
	}, [deleteError, dispatch])

	useEffect(() => {
		if (appointmentDelete) {
			toastSuccess(appointmentDelete)
			dispatch({ type: APPOINTMENTS_DELETE_CLEAR })
		}
	}, [appointmentDelete, dispatch])

	return (
		<>
			<Toast />
			<div className="fixed -mt-20 w-full min-h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
				{details && (
					<div className="bg-white p-6 flex flex-col gap-3 rounded-md w-[85%] max-w-lg transition z-[9999999]">
						<div className="flex justify-between text-gray-500 items-center border-b-2 pb-2 ">
							<h1 className="font-semibold text-base sm:text-lg ">
								Appointment Details
							</h1>
							<div className="flex gap-4">
								<FaTrashAlt className="cursor-pointer" onClick={deleteAppoint} />
								<AiOutlineClose
									className="cursor-pointer"
									onClick={() => setDetailsOpen(false)}
								/>
							</div>
						</div>
						<main className="flex flex-col gap-5">
							<div className="flex gap-5 items-start">
								<BsPersonFill className="text-base sm:text-lg mt-1 text-gray-800" />
								<div className="text-xs sm:text-sm text-gray-600">
									<h1 className="font-bold text-base sm:text-lg capitalize text-gray-800">
										{details.user.name}
									</h1>
									<h4>{details.user.email}</h4>
									<h4>{details.phone}</h4>
								</div>
							</div>
							<div className="flex gap-5 items-start">
								<FaRegCalendarCheck className="text-base sm:text-lg mt-1 text-gray-800" />
								<div className="text-xs sm:text-sm text-gray-600">
									<h2 className="font-semibold text-base sm:text-lg text-gray-800">
										{details.time - 12 > 0
											? `${details.time - 12}:00 PM`
											: `${details.time}:00 AM`}{" "}
										-{" "}
										{details.time + details.length - 12 > 0
											? `${details.time + details.length - 12}:00 PM`
											: details.time + details.length - 12 === 0
											? `12:00 PM`
											: `${details.time + details.length}:00 AM`}
									</h2>
									<p className="">
										{moment(details.date)
											.format("dddd, DD MMMM YYYY")
											.toString()}
									</p>
								</div>
							</div>
							<div className="flex gap-5 items-start">
								<BsBriefcaseFill className="text-base sm:text-lg mt-1 text-gray-800" />
								<div className="text-xs sm:text-sm text-gray-600">
									<h2 className="font-semibold text-base sm:text-lg text-gray-800">
										{details.service}
									</h2>
								</div>
							</div>
							<div className="flex gap-5 items-start">
								<FaMapMarkerAlt className="text-base sm:text-lg mt-1 text-gray-800" />
								<div className="text-sm text-gray-600">
									<h2 className="font-semibold text-base sm:text-lg text-gray-800">
										{details.location}
									</h2>
								</div>
							</div>
							{details.comment && (
								<div className="flex gap-5 items-start">
									<FaCommentAlt className="text-base sm:text-lg  mt-1 text-gray-800" />
									<div className="text-sm text-gray-600">
										<h2 className="font-semibold text-base sm:text-lg text-gray-800">
											Comments
										</h2>
										<p className="text-xs sm:text-sm">{details.comment}</p>
									</div>
								</div>
							)}
						</main>
					</div>
				)}
			</div>
		</>
	)
}

export default DetailsCard
