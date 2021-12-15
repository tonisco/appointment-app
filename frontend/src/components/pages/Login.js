import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginAction } from "../../redux/actions/userActions"
import { useEffect } from "react"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { loading, user, error } = useSelector((state) => state.user)

	const formSubmit = (e) => {
		e.preventDefault()
		dispatch(loginAction({ email, password }))
	}

	useEffect(() => {
		if (error) {
			toast.error(error, {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		}
	}, [error])

	// useEffect(() => {
	// 	if (notification) {
	// 		toast.success("You have logged in successfully", {
	// 			position: "top-right",
	// 			autoClose: 3000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 		})
	// 		// dispatch(notificationCLear)
	// 	}
	// }, [notification, dispatch])

	useEffect(() => {
		if (user) navigate("/")
	}, [user, navigate])

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<ToastContainer />
			<div className="grid grid-cols-1 md:grid-cols-2 h-[75.3vh] h">
				<figure className="w-full h-full overflow-hidden hidden md:block">
					<img
						src="/images/login.jpg"
						alt="login img"
						className="object-cover w-full h-full"
					/>
				</figure>
				<form
					className="flex flex-col gap-4 justify-center items-center"
					onSubmit={formSubmit}
				>
					<h1 className="text-3xl">Logo</h1>
					<h2>Welcome back</h2>
					<div className="flex flex-col gap-2 w-1/2">
						<label htmlFor="email" className="text-xl font-semibold">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="bg-gray-200 h-10 p-2 focus:outline-none"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-2 w-1/2">
						<label htmlFor="name" className="text-xl font-semibold">
							Password
						</label>
						<input
							type="password"
							id="name"
							className="bg-gray-200 h-10 p-2 focus:outline-none "
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className={`py-2 px-9 text-white font-semibold hover:bg-yellow-800 transition rounded-md relative ${
							loading ? "bg-yellow-800 cursor-not-allowed" : "bg-yellow-700"
						}`}
					>
						Login
						{loading && (
							<div class="absolute top-1/3">
								<div class="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
								<div class="w-5 h-5 border-blue-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
							</div>
						)}
					</button>
				</form>
			</div>
		</>
	)
}

export default Login
