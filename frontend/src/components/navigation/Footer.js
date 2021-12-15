import React from "react"

const Footer = () => {
	return (
		<div>
			<div className="flex justify-center gap-10 text-white bg-yellow-700 p-9">
				<div>LOGO</div>
				<div>Copyright &copy; Logo {new Date().getUTCFullYear()}</div>
			</div>
		</div>
	)
}

export default Footer
