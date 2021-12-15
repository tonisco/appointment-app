import React, { useState } from "react"
import AdminComponent from "../AdminComponent"
import Sidebar from "../navigation/Sidebar"
import { AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import DetailsCard from "../utils/DetailsCard"

const Admin = () => {
	const [open, setOpen] = useState(false)
	const [detailsOpen, setDetailsOpen] = useState(false)
	const [detailsId, setDetailsId] = useState("61b7c34341d9f3a07fef39e2")

	const openDetails = (id) => {
		setDetailsId(id)
		setDetailsOpen(true)
	}

	return (
		<div className="flex">
			<div
				className="md:hidden fixed bottom-[15%] right-0 text-yellow-700 bg-white shadow-lg p-3 rounded-full text-xl"
				onClick={() => setOpen(!open)}
			>
				{!open ? <GiHamburgerMenu /> : <AiOutlineClose />}
			</div>
			<Sidebar open={open} />
			<AdminComponent openDetails={openDetails} />
			{detailsOpen && <DetailsCard detailsId={detailsId} setDetailsOpen={setDetailsOpen} />}
		</div>
	)
}

export default Admin
