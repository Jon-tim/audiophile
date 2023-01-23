import React from "react";
import { Link } from "react-router-dom";
import products from "../data/data.json";

function Btn(props) {
  // console.log(products[0]);

  // const handleSeeProduct = (event) => {
  //   // console.log(event.target);
  //   // console.log(products);
  //   products.filter((i) => {
  //     if (i.slug === props.slugName) {
  //       // console.log(props.slugName);
  //     }
  //   });
  // };
  return (
    <>
      <Link
        to={props.linkTo}
        className="bg-orangeText px-9 py-3 transition font-medium uppercase text-white"
      >
        {props.children}
      </Link>
    </>
  );
}

export default Btn;
