import React from "react";
import Btn from "../utils/Btn";
import { Link } from "react-router-dom";
function PageProducts(props) {
  return (
    <>
      <div
        className={` ${
          props?.flex ? "flex-row-reverse" : ""
        } max-w-5xl mx-auto w-full flex items-center gap-16`}
      >
        <div className="w-1/2 rounded-xl overflow-hidden">
          <picture className="">
            <source media="(min-width: 1280px )" srcSet={props?.imgLg} />
            <source media="(min-width:768px )" srcSet={props?.imgMd} />
            <img src={props?.imgSm} alt="product Image" className="" />
          </picture>
        </div>
        <aside className="w-1/2 flex flex-col items-start gap-4">
          {props?.new ? (
            <p className="text-orangeBg uppercase text-base tracking-[1em]">
              new product
            </p>
          ) : null}
          <h1 className="uppercase text-5xl w-3/4">{props?.title}</h1>
          <p className="text-blk3">{props?.description}</p>
          <Btn linkTo={`/${props?.slug}`} slugName={props.slug}>
            see product
          </Btn>
        </aside>
      </div>
    </>
  );
}

export default PageProducts;
