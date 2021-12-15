import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../redux/actions/userActions"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
	const [show, setShow] = useState(false)

	const { user } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	return (
		<div className="bg-gray-900  opacity-70 flex justify-center">
			<div className="w-full w-[85%] max-w-4xl flex-col md:flex-row flex justify-between gap-3 md:gap-5 p-3 font-bold text-white transition">
				<div className="flex  justify-between w-full md:w-auto">
					<NavLink to="/">LOGO</NavLink>
					{!show ? (
						<GiHamburgerMenu
							className="block md:hidden"
							onClick={() => {
								setShow(!show)
							}}
						/>
					) : (
						<AiOutlineClose
							className="block md:hidden text-white"
							onClick={() => {
								setShow(!show)
							}}
						/>
					)}
				</div>

				<ul className="hidden md:flex justify-between gap-3 justify-self-start w-72 md:w-80 lg:w-96">
					<NavLink to="/" className={(navData) => navData.isActive && "text-yellow-700"}>
						HOME
					</NavLink>
					<NavLink
						to="/services"
						className={(navData) => navData.isActive && "text-yellow-700"}
					>
						SERVICES
					</NavLink>
					<li>ABOUT</li>
				</ul>
				<ul className="hidden md:flex justify-between gap-3 w-40 md:w-48 uppercase">
					{user ? (
						<>
							{user.isAdmin ? (
								<NavLink
									to="/admin"
									className={(navData) =>
										navData.isActive && "text-yellow-700 truncate uppercase"
									}
								>
									Hi, {user.name.split(" ")[0]}
								</NavLink>
							) : (
								<li>Hi, {user.name.split(" ")[0]}</li>
							)}
							<li className="cursor-pointer" onClick={() => dispatch(logout())}>
								SIGN OUT
							</li>
						</>
					) : (
						<>
							<NavLink
								to="/login"
								className={(navData) => navData.isActive && "text-yellow-700"}
							>
								LOGIN
							</NavLink>
							<NavLink
								to="/register"
								className={(navData) => navData.isActive && "text-yellow-700"}
							>
								SIGN UP
							</NavLink>
						</>
					)}
				</ul>
				{show && (
					<>
						<ul className="flex flex-col md:hidden justify-between gap-3 justify-self-start w-72 md:w-80 lg:w-96">
							<NavLink
								to="/"
								className={(navData) => navData.isActive && "text-yellow-700"}
							>
								HOME
							</NavLink>
							<NavLink
								to="/services"
								className={(navData) => navData.isActive && "text-yellow-700"}
							>
								SERVICES
							</NavLink>
							<li>ABOUT</li>
						</ul>
						<ul className="flex flex-col md:hidden justify-between gap-3 w-40 md:w-48 uppercase">
							{user ? (
								<>
									{user.isAdmin ? (
										<NavLink
											to="/admin"
											className={(navData) =>
												navData.isActive &&
												"text-yellow-700 truncate uppercase"
											}
										>
											Hi, {user.name.split(" ")[0]}
										</NavLink>
									) : (
										<li>Hi, {user.name.split(" ")[0]}</li>
									)}
									<li
										className="cursor-pointer"
										onClick={() => dispatch(logout())}
									>
										SIGN OUT
									</li>
								</>
							) : (
								<>
									<NavLink
										to="/login"
										className={(navData) =>
											navData.isActive && "text-yellow-700"
										}
									>
										LOGIN
									</NavLink>
									<NavLink
										to="/register"
										className={(navData) =>
											navData.isActive && "text-yellow-700"
										}
									>
										SIGN UP
									</NavLink>
								</>
							)}
						</ul>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
