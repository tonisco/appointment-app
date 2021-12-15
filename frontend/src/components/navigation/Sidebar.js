import React from "react"
import { AiFillHome, AiFillSetting } from "react-icons/ai"
import { BsCalendarCheck } from "react-icons/bs"
import { BiMessageRoundedDots, BiClipboard } from "react-icons/bi"
import { MdNotificationsActive } from "react-icons/md"
const Sidebar = ({ open }) => {
	return (
		<>
			<div className="hidden md:flex flex-col gap-6 text-white bg-blue-900 px-5 py-7 md:relative h-auto">
				<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
					<AiFillHome /> Dashboard
				</h3>
				<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
					<BiClipboard /> Board
				</h3>
				<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
					<BiMessageRoundedDots /> Messages
				</h3>
				<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
					<MdNotificationsActive /> Notification
				</h3>
				<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
					<BsCalendarCheck /> Schedule
				</h3>
				<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
					<AiFillSetting /> settings
				</h3>
			</div>
			{open && (
				<div className="flex md:hidden flex-col gap-6 text-white bg-blue-900 px-5 py-10 fixed h-full transition top-0">
					<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
						<AiFillHome /> Dashboard
					</h3>
					<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
						<BiClipboard /> Board
					</h3>
					<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
						<BiMessageRoundedDots /> Messages
					</h3>
					<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
						<MdNotificationsActive /> Notification
					</h3>
					<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
						<BsCalendarCheck /> Schedule
					</h3>
					<h3 className="text-sm flex gap-1 items-center font-semibold cursor-pointer">
						<AiFillSetting /> settings
					</h3>
				</div>
			)}
		</>
	)
}

export default Sidebar
