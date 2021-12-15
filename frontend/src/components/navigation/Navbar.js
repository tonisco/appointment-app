import React from "react"
import Toolbar from "./Toolbar"
import Header from "./Header"
import Footer from "./Footer"

const Navbar = ({ children }) => {
	return (
		<div>
			<Toolbar />
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Navbar
