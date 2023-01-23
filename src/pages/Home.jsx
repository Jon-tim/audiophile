import React from "react";
import Navbar from "../feature/Navbar";
import Btn from "../utils/Btn";
import Product from "../feature/Product";
import SeeProducts from "../feature/SeeProducts";
import BestGear from "../feature/BestGear";
import Footer from "../feature/Footer";
export const Home = () => {
  return (
    <>
      <header
        className="w-full bg-[url('../src/assets/images/home/mobile/image-header.jpg')] 
      md:bg-[url('../src/assets/images/home/tablet/image-header.jpg')] xl:bg-[url('../src/assets/images/home/desktop/image-hero.jpg')] bg-no-repeat bg-cover md:bg-top xl:bg-cover xl:be-center xl:h-screen bg-center h-screen"
      >
        <Navbar />
        <div className="hero max-w-5xl m-auto h-[90%] w-full  xl:h-[85%] flex items-center justify-center xl:justify-start md:h-[]">
          <div
            className="hero-details h-[350px] flex flex-col justify-between items-center text-center 
          
          xl:text-left xl:items-start"
          >
            <p className="text-blk2 uppercase text-base tracking-[1em]">
              new product
            </p>
            <h1 className="text-white uppercase font-medium text-5xl xl:text-6xl">
              xx99 mark ii
              <br /> headphones
            </h1>
            <p className="text-blk1 w-[23rem] leading-7 xl:max-w-[26rem]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Btn
              className="uppercase text-white px-7 py-3 font-medium"
              linkTo={"/xx99-mark-two-headphones"}
            >
              see product
            </Btn>
          </div>
        </div>
      </header>
      <div className="px-8 xl:mt-10">
        <Product />
        <SeeProducts />
        <BestGear />
      </div>
      <Footer />
    </>
  );
};
