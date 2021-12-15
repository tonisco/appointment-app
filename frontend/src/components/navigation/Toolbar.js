import React from "react"
import { GrMail, GrTwitter, GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr"
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Toolbar = () => {
	return (
		<main className="w-full bg-blue-900 p-1 content-center hidden sm:flex">
			<div className="flex justify-between text-xs md:text-sm text-white w-full sm:w-[85%] max-w-[900px] m-auto">
				<div className="flex gap-3">
					<p className="toolbar-icons">
						<GrMail />
						attorneylaw@mail.com
					</p>
					<p className="toolbar-icons">
						<FaMapMarkerAlt />
						25, Corey Town, New State
					</p>
					<p className="toolbar-icons">
						<FaPhone />
						+34-24495403
					</p>
				</div>
				<div>
					<p className="toolbar-icons">
						Follow Us: <GrTwitter />
						<GrFacebookOption />
						<GrInstagram />
						<GrLinkedinOption />
					</p>
				</div>
			</div>
		</main>
	)
}

export default Toolbar
