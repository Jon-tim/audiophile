import React from "react";
import Footer from "../feature/Footer";
import Navbar from "../feature/Navbar";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
	const navigate = useNavigate();

	return (
		<div className="bg-grayBg">
			<div className="bg-blk4">
				<Navbar />
			</div>
			<div className="checkoutForm max-w-5xl mx-auto ">
				<p
					className="capitalize font-semibold text-sm cursor-pointer text-blk3 my-8 hover:text-blk2"
					onClick={() => navigate(-1)}
				>
					go back
				</p>
				<div className="checkHold flex items-start w-full gap-6 ">
					<div className="checkout w-[70%] rounded-lg  p-10 bg-white ">
						<h1 className="text-3xl uppercase font-medium text-blk4 mb-8">
							checkout
						</h1>

						<form className="flex flex-col w-full gap-12">
							<fieldset className="flex flex-wrap w-full justify-between gap-5">
								<legend className="">billing details</legend>
								<div className="flex flex-col gap-2">
									<label htmlFor="name">name</label>
									<input
										type="text"
										id="name"
										placeholder="john doe"
									/>
								</div>
								{/* ====================== */}
								<div className="flex flex-col gap-2">
									<label htmlFor="email">email address</label>
									<input
										type="email"
										name=""
										id="emal"
										placeholder="johndoe@mail.com"
										className="email"
									/>
								</div>
								{/* ====================== */}
								<div className="flex flex-col gap-2">
									<label htmlFor="number">phone number</label>
									<input
										type="text"
										name=""
										id="number"
										placeholder="123456789"
									/>
								</div>
							</fieldset>
							{/* ====================== */}
							{/* ====================== */}

							<fieldset className="flex flex-wrap w-full justify-between gap-5">
								<legend>shipping info</legend>
								{/* ====================== */}
								<div className="flex flex-col gap-2 w-full">
									<label htmlFor="address">address</label>
									<input
										type="text"
										id="address"
										placeholder="111 willy avenue"
									/>
								</div>
								{/* ====================== */}

								<div className="flex flex-col gap-2">
									<label htmlFor="zip">zip code</label>
									<input
										type="text"
										id="zip"
										placeholder="123456"
									/>
								</div>
								{/* ====================== */}
								<div className="flex flex-col gap-2">
									<label htmlFor="city">city</label>
									<input
										type="text"
										id="city"
										placeholder="lagos"
									/>
								</div>
								{/* ====================== */}
								<div className="flex flex-col gap-2">
									<label htmlFor="country">country</label>
									<input
										type="text"
										id="nigeria"
										placeholder="nigeria"
									/>
								</div>
							</fieldset>
							{/* ====================== */}
							{/* ====================== */}
							<fieldset className=" flex flex-col gap-5">
								<legend>payment details</legend>
								<div className="flex items-start justify-between gap-5 w-full">
									<p className="capitalize text-sm font-medium text-blk4 w-1/2">
										payment method
									</p>
									<div className="flex items-start flex-col gap-4 w-1/2">
										<div className="flex gap-4 flex-row-reverse items-center justify-end pl-4 rounded-md border border-blk1 w-full h-[40px]">
											<label htmlFor="method1">
												e-naira
											</label>
											<input
												type="radio"
												name="e-naira"
												id="method1"
												className=""
											/>
										</div>
										<div
											className="flex gap-4 
                    flex-row-reverse 
                    justify-end
                    items-center pl-4 rounded-md border border-blk1 w-full h-[40px]"
										>
											<label htmlFor="method2">
												cash on delivery
											</label>
											<input
												type="radio"
												name="e-naira"
												id="method2"
												value="cash"
											/>
										</div>
									</div>
								</div>

								<fieldset className="onMethod flex items-center gap-5 justify-between flex-wrap">
									<div className="flex flex-col gap-2 w-1/2 flex-1">
										<label htmlFor="e-nairaMode">
											e-Money Number
										</label>
										<input
											type="text"
											id="e-nairaMode"
											placeholder="875587564"
										/>
									</div>
									<div className="flex flex-1 flex-col gap-2 w-1/2">
										<label htmlFor="e-nairaPin">
											e-Money PIN
										</label>
										<input
											type="text"
											id="e-nairaPin"
											placeholder="8757"
										/>
									</div>
								</fieldset>
							</fieldset>
						</form>
					</div>
					<div className="summary w-[30%] bg-white p-6 rounded-lg">
						<h1 className="uppercase font-medium text-xl">
							summary
						</h1>
						<div className="cart"></div>
						<div className="flex items-center justify-between">
							<p>total</p>
							<p>$3,454</p>
						</div>
						<div className="flex items-center justify-between">
							<p>shipping</p>
							<p>$54</p>
						</div>
						<div className="flex items-center justify-between">
							<p>vat (included)</p>
							<p>$1,054</p>
						</div>
						<div className="flex items-center justify-between">
							<p>grand total</p>
							<p>$7,454</p>
						</div>
						<button className="w-full bg-orangeText text-white uppercase py-4">
							continue & pay
						</button>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
