import React from "react";
import { Link } from "react-router-dom";

function SecondaryBtn(props) {
  return (
    <>
      <Link to={props.linkTo} className="bg-transparent px-9 py-3 font-medium uppercase text-blk3 border-2 border-blk3 hover:bg-blk3 hover:text-white transition">
        {props.children}
      </Link>
    </>
  );
}

export default SecondaryBtn;
