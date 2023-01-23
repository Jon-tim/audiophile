import React from "react";
import mdBestGear from "../../src/assets/images/shared/tablet/image-best-gear.jpg";
import smBestGear from "../../src/assets/images/shared/mobile/image-best-gear.jpg";
import lgBestGear from "../../src/assets/images/shared/desktop/image-best-gear.jpg";
import { useRef } from "react";

function BestGear() {
  return (
    <div className="flex flex-col gap-8 mt-20 w-full md:gap-16 lg:flex-row-reverse lg:gap-8 max-w-5xl mx-auto">
      <div className=" rounded-xl overflow-hidden lg:rounded-lg lg:w-1/2">
        <img src={smBestGear} alt="" className=" md:hidden w-full" />
        <img
          src={mdBestGear}
          alt=""
          className="hidden md:block lg:hidden w-full"
        />
        <img src={lgBestGear} alt="" className="hidden lg:block w- " />
      </div>
      <div className="flex flex-col items-center gap-6 w-full lg:w-1/2 lg:items-start lg:justify-center">
        <h1 className="uppercase text-3xl text-center font-medium w-72 md:w-[85%] md:text-5xl lg:text-left ">
          bringing you the <span className="text-orangeText">best</span> audio
          gear
        </h1>
        <p className="text-blk2 text-center md:w-[95%] lg:text-left ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BestGear;
