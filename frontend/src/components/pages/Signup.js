import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerAction } from "../../redux/actions/userActions"
import Toast, { toastError } from "../utils/Toast"

const Signup = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [isAdmin, setIsAdmin] = useState(false)
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.user)
	const { loading, error } = useSelector((state) => state.register)

	const formSubmit = (e) => {
		e.preventDefault()
		const nameValue = /\w{3,}\s\w{3,}/i.test(name)
		if (!nameValue) return toastError("Pls Enter Your Full Name With Space")
		dispatch(registerAction({ name, email, password, isAdmin }))
	}

	useEffect(() => {
		if (error) {
			toastError(error)
		}
	}, [error])

	useEffect(() => {
		if (user) navigate("/")
	}, [user, navigate])

	return (
		<>
			<Toast />
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
						<label htmlFor="name" className="text-xl font-semibold">
							Full Name
						</label>
						<input
							type="text"
							id="name"
							className="bg-gray-200 h-10 p-2 focus:outline-none"
							placeholder="Name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
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
						<label htmlFor="password" className="text-xl font-semibold">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="bg-gray-200 h-10 p-2 focus:outline-none "
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex items-center w-1/2 mb-2">
						<label htmlFor="admin" className="text-xl font-semibold mr-2">
							Sign up as a lawyer
						</label>
						<input
							type="checkbox"
							id="admin"
							value={isAdmin}
							onChange={(e) => setIsAdmin(e.target.checked)}
						/>
					</div>
					<button
						type="submit"
						className={`py-2 px-9 text-white font-semibold hover:bg-yellow-800 transition rounded-md relative ${
							loading ? "bg-yellow-800 cursor-not-allowed" : "bg-yellow-700"
						}`}
					>
						Register
						{loading && (
							<div className="absolute top-1/3">
								<div className="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
								<div className="w-5 h-5 border-blue-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
							</div>
						)}
					</button>
				</form>
			</div>
		</>
	)
}

export default Signup
