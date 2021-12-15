import React from "react"

const Pagination = ({ page, totalPages, setParams }) => {
	return (
		<ul className="flex self-center mb-7">
			{[...Array(totalPages).keys()].map((i) => (
				<li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
					<p className="font-bold" onClick={() => setParams({ page: i + 1 })}>
						{i + 1}
					</p>
				</li>
			))}
		</ul>
	)
}

export default Pagination
