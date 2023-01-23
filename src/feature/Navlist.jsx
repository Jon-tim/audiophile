import React from "react";
import list from "../data/data";
import { NavLink } from "react-router-dom";
function Navlist() {
  const active = {
    color: "#d87d4a",
  };
  return (
    <>
      {list.map((i) => (
        <NavLink
          key={i}
          to={i === "home" ? "/" : `/${i}`}
          className="text-white uppercase cursor-pointer hover:text-orangeText font-medium transition active:text-orangeText"
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          {i}
        </NavLink>
      ))}
    </>
  );
}

export default Navlist;
