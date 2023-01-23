import React from "react";
import Footer from "../feature/Footer";
import Navbar from "../feature/Navbar";
import Product from "../feature/Product";
import SeeProducts from "../feature/SeeProducts";
import BestGear from "../feature/BestGear";
import products from "../data/data.json";
import { useState, useEffect } from "react";
import Btn from "../utils/Btn";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function SingleProduct() {
  const { productId } = useParams();
  const [data, setData] = useState();
  const [cartNum, setCartNum] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../src/data/data.json");
      let gotData = await response.json();
      let gottendata = await gotData;
      gottendata?.filter((i) => {
        if (i.slug === productId) {
          // console.log(productId);
          setData(i);
        }
      });
    };
    fetchData();
  }, [productId]);

  // console.log(data);
  const plus = () => {
    setCartNum((prev) => prev + 1);
  };
  const minus = () => {
    setCartNum((prev) => {
      return prev === 1 ? (prev = 1) : prev - 1;
    });
  };

  const {
    id,
    // slug,
    name,
    image,
    new: hi,
    // category,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = data || {};

  const { first, second, third } = gallery || {};

  // console.log(data);

  return (
    <div>
      {/* <h1>{data?.name}</h1> */}
      <div className="bg-blk4">
        <Navbar />
      </div>
      <div className="max-w-5xl mx-auto mb-20">
        <p
          className="capitalize font-semibold text-sm cursor-pointer text-blk3 my-8 hover:text-blk2 w-max"
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </p>
        <section className="">
          <div className="product flex items-center mb-24 justify-between w-full gap-16">
            <div className="w-[50%] rounded-xl overflow-hidden">
              <picture className="">
                <source media="(min-width: 1280px )" srcSet={image?.desktop} />
                <source media="(min-width:768px )" srcSet={image?.tablet} />
                <img src={image?.mobile} alt="product Image" className="" />
              </picture>
            </div>
            <div className="w-[45%] flex flex-col gap-6">
              {hi ?? (
                <p className=" text-orangeText uppercase text-base tracking-[1em]">
                  new product
                </p>
              )}
              <h1 className="text-blk4 uppercase font-medium text-4xl xl:text-5xl">
                {name}
              </h1>
              <p className="text-blk3 w-full leading-7">{description}</p>
              <p className="font-semibold text-orangeText">
                ${price?.toLocaleString()}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center w-[150px] py-4 px-6 justify-between
               bg-[rgba(207,207,207,.3)]"
                >
                  <p
                    className="text-blk2 h-full cursor-pointer "
                    onClick={minus}
                  >
                    -
                  </p>
                  <p className="font-semibold">{cartNum}</p>
                  <p
                    className="text-blk2 h-full cursor-pointer "
                    onClick={plus}
                  >
                    +
                  </p>
                </div>
                <button className="bg-orangeText px-10 py-4 transition font-medium uppercase text-white">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="features flex items-start w-full mb-24">
            <div className="w-[70%]">
              <h1 className="uppercase  text-blk4 font-semibold text-3xl mb-4">
                features
              </h1>
              <p className="whitespace-pre-wrap w-[95%] text-blk3">
                {features}
              </p>
            </div>
            <div className="includes w-[30%]  pl-16">
              <h1 className="uppercase  text-blk4 font-semibold text-3xl mb-4">
                in the box
              </h1>
              <ul className="flex flex-col gap-2">
                {includes?.map((i) => (
                  <li key={i?.item} className="">
                    <span className="text-orangeText inline-block mr-3">
                      {i?.quantity}x
                    </span>
                    <span className="text-blk3 inline-block">{i?.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="gallery grid grid-cols-[40%_60%] grid-rows-2 gap-4 mb-24">
            <div className="w-full rounded-xl overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
              <picture className="">
                <source media="(min-width: 1280px )" srcSet={first?.desktop} />
                <source media="(min-width:768px )" srcSet={first?.tablet} />
                <img
                  src={first?.mobile}
                  alt="product Image"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>
            <div className="w-full rounded-xl overflow-hidden col-start-1 col-end-2 row-start-2 row-end-3">
              <picture className="">
                <source media="(min-width: 1280px )" srcSet={second?.desktop} />
                <source media="(min-width:768px )" srcSet={second?.tablet} />
                <img
                  src={second?.mobile}
                  alt="product Image"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>
            <div className="w-full rounded-xl overflow-hidden col-start-2 col-end-3 row-start-1 row-end-3">
              <picture className="">
                <source media="(min-width: 1280px )" srcSet={third?.desktop} />
                <source media="(min-width:768px )" srcSet={third?.tablet} />
                <img
                  src={third?.mobile}
                  alt="product Image"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>
          </div>
          <div className="also-like flex items-center gap-12 flex-col">
            <h1 className="uppercase  text-blk4 text-center font-semibold text-3xl">
              you may also like
            </h1>
            <div className="flex items-center gap-4">
              {others?.map((i) => (
                <div className="flex flex-col items-center gap-6" key={i?.slug}>
                  <picture className="">
                    <source
                      media="(min-width: 1280px )"
                      srcSet={i?.image?.desktop}
                    />
                    <source
                      media="(min-width:768px )"
                      srcSet={i?.image?.tablet}
                    />
                    <img
                      src={i?.image?.mobile}
                      alt="product Image"
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                  <p className="uppercase font-semibold text-xl text-blk4">
                    {i?.name}
                  </p>
                  <Btn
                    linkTo={`/${i?.slug}`}
                    className="uppercase text-white px-7 py-3 font-medium"
                  >
                    see product
                  </Btn>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Product></Product>
      <BestGear></BestGear>
      <Footer></Footer>
    </div>
  );
}
