import React, { useEffect, useState } from "react";
import Navbar from "../feature/Navbar";
import Footer from "../feature/Footer";
import BestGear from "../feature/BestGear";
import Product from "../feature/Product";
import PageProducts from "../components/PageProducts";
import products from "../data/products.json";

function Earphones() {
	// console.log(products[0].earphones);
	const [earphones, setEarphones] = useState(products[0].earphones);
	return (
		<div>
			<div className="bg-blk4">
				<Navbar></Navbar>
				<div className="w-full flex items-center justify-center py-14">
					<h1 className="uppercase text-white text-3xl font-medium">
						earphones
					</h1>
				</div>
			</div>
			<div className="flex flex-col gap-16 my-16">
				{earphones?.map((i) => (
					<PageProducts
						flex={i?.flex}
						key={i?.id}
						new={i?.new}
						title={i?.title}
						description={i?.description}
						imgSm={i?.imageSm}
						imgMd={i?.imageMd}
						imgLg={i?.imageLg}
						slug={i?.slug}
					/>
				))}
			</div>
			<Product />
			<BestGear />
			<Footer></Footer>
		</div>
	);
}

export default Earphones;
