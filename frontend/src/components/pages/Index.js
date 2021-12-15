import React from "react"
import { HiOutlineUserGroup } from "react-icons/hi"
import { GiScales, GiBookmark } from "react-icons/gi"
import { BiBadgeCheck } from "react-icons/bi"
import { MdFamilyRestroom, MdBusinessCenter, MdRealEstateAgent } from "react-icons/md"
import { FaUserInjured, FaGraduationCap } from "react-icons/fa"
import { RiCriminalFill } from "react-icons/ri"

const Index = () => {
	return (
		<main>
			<div className="hero relative">
				<div
					className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col
        text-white text-5xl gap-3 font-bold"
				>
					<h1>Get Your Life Back</h1>
					<h1>Find Out How</h1>
					<p className="text-xs max-w-md font-normal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe, fugit
						odit atque corrupti suscipit incidunt voluptatum nam delectus recusandae
					</p>
					<button className="text-sm p-4 bg-yellow-700 font-normal rounded-lg">
						Book an Appointment
					</button>
				</div>
			</div>

			<section className="py-10 flex justify-center books">
				<div className="flex flex-col md:flex-row gap-5  mx-auto text-white">
					<div className="features">
						<div>
							<GiBookmark />
						</div>
						<div>
							<p>Book Your</p>
							<h2>Appointment</h2>
						</div>
					</div>
					<div className="features">
						<div>
							<GiScales />
						</div>
						<div>
							<p>Get</p>
							<h2>Expert Advice</h2>
						</div>
					</div>
					<div className="features">
						<div>
							<HiOutlineUserGroup />
						</div>
						<div>
							<p>You Can Easily</p>
							<h2>Join Our Team</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="flex justify-center p-7">
				<div className="flex max-w-3xl gap-10 justify-center">
					<figure className=" w-1/2 h-auto overflow-hidden rounded-md">
						<img
							src="/images/lawyer.jpg"
							alt="lawyer"
							className="object-cover w-full h-full"
						/>
					</figure>
					<div className="w-1/2 flex flex-col gap-4">
						<h1 className="text-4xl font-bold text-yellow-700">
							We Are The Best Law Consultant
						</h1>
						<p className="text-sm text-gray-700">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
							labore est deserunt provident, tempora autem magni, aspernatur commodi
							consequatur, temporibus repellat consectetur cum. Obcaecati veritatis
							impedit sit aspernatur debitis fuga!
						</p>
						<p className="text-sm text-gray-700 flex gap-2">
							<BiBadgeCheck className="h-5 w-5 stroke-current text-yellow-700" />
							Lorem, ipsum si distinctio error, dolores aspernatur saepe sinMollitia,
							iusto.
						</p>
						<p className="text-sm text-gray-700 flex gap-2">
							<BiBadgeCheck className="h-5 w-5 stroke-current text-yellow-700" />
							Lorem, ipsum si distinctio error, dolores aspernatur saepe sinMollitia,
							iusto.
						</p>
						<p className="text-sm text-gray-700 flex gap-2">
							<BiBadgeCheck className="h-5 w-5 stroke-current text-yellow-700" />
							Lorem, ipsum si distinctio error, dolores aspernatur saepe sinMollitia,
							iusto.
						</p>
					</div>
				</div>
			</section>
			<section className="practice flex flex-col items-center pb-8">
				<h3 className="text-white my-5 text-xl font-bold underlines relative w-auto">
					Area of Practice
				</h3>
				<div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl">
					<div className="flex gap-3 text-yellow-700 p-3 max-w-sm items-center bg-gray-400">
						<div>
							<MdFamilyRestroom className="h-10 w-10" />
						</div>
						<div className="text-white border-l border-yellow-700 p-2">
							<h4 className="text-lg font-semibold">Family Law</h4>
							<p className="text-xs">Lorem ipsum, dolor sit amet consectetur</p>
						</div>
					</div>
					<div className="flex gap-3 text-yellow-700 p-3 max-w-sm items-center bg-gray-400">
						<div>
							<FaUserInjured className="h-10 w-10" />
						</div>
						<div className="text-white border-l border-yellow-700 p-2">
							<h4 className="text-lg font-semibold">Personal Injury</h4>
							<p className="text-xs">Lorem ipsum, dolor sit amet consectetur</p>
						</div>
					</div>
					<div className="flex gap-3 text-yellow-700 p-3 max-w-sm items-center bg-gray-400">
						<div>
							<MdBusinessCenter className="h-10 w-10" />
						</div>
						<div className="text-white border-l border-yellow-700 p-2">
							<h4 className="text-lg font-semibold">Business Law</h4>
							<p className="text-xs">Lorem ipsum, dolor sit amet consectetur</p>
						</div>
					</div>
					<div className="flex gap-3 text-yellow-700 p-3 max-w-sm items-center bg-gray-400">
						<div>
							<RiCriminalFill className="h-10 w-10" />
						</div>
						<div className="text-white border-l border-yellow-700 p-2">
							<h4 className="text-lg font-semibold">Criminal Law</h4>
							<p className="text-xs">Lorem ipsum, dolor sit amet consectetur</p>
						</div>
					</div>
					<div className="flex gap-3 text-yellow-700 p-3 max-w-sm items-center bg-gray-400">
						<div>
							<FaGraduationCap className="h-10 w-10" />
						</div>
						<div className="text-white border-l border-yellow-700 p-2">
							<h4 className="text-lg font-semibold">Education Law</h4>
							<p className="text-xs">Lorem ipsum, dolor sit amet consectetur</p>
						</div>
					</div>
					<div className="flex gap-3 text-yellow-700 p-3 max-w-sm items-center bg-gray-400">
						<div>
							<MdRealEstateAgent className="h-10 w-10" />
						</div>
						<div className="text-white border-l border-yellow-700 p-2">
							<h4 className="text-lg font-semibold">Real Estate Law</h4>
							<p className="text-xs">Lorem ipsum, dolor sit amet consectetur</p>
						</div>
					</div>
				</div>
			</section>

			<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
				<div class="w-full text-center pb-8">
					<h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
						Testimonials about us
					</h1>
					<p class="text-gray-500 font-normal text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-white rounded-lg p-6">
						<div class="flex items-center space-x-6 mb-4">
							<img
								class="h-28 w-28 object-cover object-center rounded-full"
								src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="model"
							/>
							<div>
								<p class="text-xl text-gray-700 font-normal mb-1">Dany Bailey</p>
								<p class="text-base text-yellow-700 font-normal">
									Acquitted Person
								</p>
							</div>
						</div>
						<div>
							<p class=" text-gray-500 text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
					<div class="bg-white rounded-lg p-6">
						<div class="flex items-center space-x-6 mb-4">
							<img
								class="h-28 w-28 object-cover object-center rounded-full"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="model"
							/>
							<div>
								<p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
								<p class="text-base text-yellow-700 font-normal">Home Owner</p>
							</div>
						</div>
						<div>
							<p class="text-gray-500 text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
					<div class="bg-white rounded-lg p-6">
						<div class="flex items-center space-x-6 mb-4">
							<img
								class="h-28 w-28 object-cover object-center rounded-full"
								src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
								alt="model"
							/>
							<div>
								<p class="text-xl text-gray-700 font-normal mb-1">Jade Bradley</p>
								<p class="text-base text-yellow-700 font-normal">
									Scholarship student
								</p>
							</div>
						</div>
						<div>
							<p class="text-gray-500 text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
					<div class="bg-white rounded-lg p-6">
						<div class="flex items-center space-x-6 mb-4">
							<img
								class="h-28 w-28 object-cover object-center rounded-full"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="model"
							/>
							<div>
								<p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
								<p class="text-base text-yellow-700 font-normal">
									Remuneration Received
								</p>
							</div>
						</div>
						<div>
							<p class="text-gray-500 text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Index
