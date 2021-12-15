import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import moment from "moment"
import { getAppointment } from "../redux/actions/appoinmentAction"
import Toast, { toastError } from "./utils/Toast"
import Pagination from "./utils/Pagination"
import { MdNetworkCheck } from "react-icons/md"
import { HiOfficeBuilding } from "react-icons/hi"
import { RiDiscussFill } from "react-icons/ri"

const AdminComponent = ({ openDetails }) => {
	const { user } = useSelector((state) => state.user)
	const { loading, appointment, error } = useSelector((state) => state.appointmentGet)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [params, setSearchParams] = useSearchParams()

	useEffect(() => {
		if (!user) {
			return navigate("/login")
		}
		if (!user.isAdmin) {
			return navigate("/")
		}
	}, [user, navigate])

	useEffect(() => {
		if (params.get("page")) dispatch(getAppointment(params.get("page")))
		else dispatch(getAppointment())
	}, [dispatch, params])

	useEffect(() => {
		if (error) toastError(error)
	}, [error])

	// if the last item is deleted on a page greater than 1
	useEffect(() => {
		if (!loading && !error) {
			if (params.get("page")) {
				if (params.get("page") > 1) {
					if (appointment.length === 0 || !appointment) {
						setSearchParams({ page: 1 })
					}
				}
			}
		}
	}, [appointment, loading, error, params, setSearchParams])

	return (
		<>
			<Toast />
			<div className="flex flex-col w-full bg-gray-100 min-h-[75.3vh]">
				<div className="sm:grid hidden  grid-cols-3 gap-4 mb-3 w-full max-w-[80%] self-center -mt-4">
					<div className="flex items-center justify-around p-6 bg-white w-auto rounded-xl space-x-2 mt-10 shadow-lg">
						<div>
							<span className="text-sm font-semibold text-gray-400">
								Appointments
							</span>
							<h1 className="text-2xl font-bold">{appointment?.totalNumber}</h1>
						</div>
						<div>
							<RiDiscussFill className="h-8 w-8 text-blue-900" />
						</div>
					</div>
					<div className="flex items-center justify-around p-6 bg-white rounded-xl space-x-2 mt-10 shadow-lg">
						<div>
							<span className="text-sm font-semibold text-gray-400">Online</span>
							<h1 className="text-2xl font-bold">{appointment?.online}</h1>
						</div>
						<div>
							<MdNetworkCheck className="h-8 w-8 text-blue-900" />
						</div>
					</div>
					<div className="flex items-center justify-around p-6 bg-white rounded-xl space-x-2 mt-10 shadow-lg">
						<div>
							<span className="text-sm font-semibold text-gray-400">Office</span>
							<h1 className="text-2xl font-bold">{appointment?.office}</h1>
						</div>
						<div>
							<HiOfficeBuilding className="h-8 w-8 text-blue-900" />
						</div>
					</div>
				</div>
				<main className=" px-2 md:px-7 py-7 w-[98%] mx-2  rounded-md flex flex-col gap-3">
					<h1 className="font-bold text-xl">Upcoming Appointments</h1>
					{!loading ? (
						appointment?.appointments?.length > 0 ? (
							<table className="w-full bg-white">
								<thead>
									<tr className="grid grid-cols-3 sm:grid-cols-5 gap-1 md:gap-3 pt-3 border-b  text-xs sm:text-sm">
										<th className="font-semibold text-center text-gray-700  uppercase pb-2">
											Name
										</th>
										<th className="font-semibold hidden sm:table-cell uppercase text-gray-700 pb-2">
											Service
										</th>
										<th className="font-semibold hidden sm:table-cell uppercase text-gray-700 pb-2">
											Location
										</th>
										<th className="font-semibold uppercase text-gray-700 pb-2">
											Time
										</th>
									</tr>
								</thead>
								<tbody>
									{appointment.appointments.map((user) => (
										<tr
											className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-3 text-sm md:text-base border-b text-center"
											key={user._id}
										>
											<td className="py-4 capitalize">{user.user.name}</td>
											<td className="py-4 hidden sm:table-cell">
												{user.service}
											</td>
											<td className="py-4 hidden sm:table-cell">
												{user.location}
											</td>
											<td className="py-4">
												{moment(user.date).endOf().fromNow()}
											</td>
											<td className="py-2">
												<button
													className="bg-blue-900 p-2 text-white text-sm md:text-base"
													onClick={() => openDetails(user._id)}
												>
													Details
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<h1 className="text-lg">You have no appointment</h1>
						)
					) : null}
				</main>
				{appointment?.totalPages > 1 && (
					<Pagination
						page={appointment.page}
						totalPages={appointment?.totalPages}
						setParams={setSearchParams}
					/>
				)}
			</div>
		</>
	)
}

export default AdminComponent
