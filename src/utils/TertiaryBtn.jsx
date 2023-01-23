import React from "react";
import { Link } from "react-router-dom";
function TertiaryBtn(props) {
  return (
    <>
      <Link
        to={props.linkTo}
        className="bg-blk4 px-9 py-3 font-medium uppercase text-white border-2 border-blk4 hover:bg-transparent hover:text-blk4 transition"
      >
        {props.children}
      </Link>
    </>
  );
}

export default TertiaryBtn;
