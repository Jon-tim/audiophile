import React from "react";
import logo from "../../src/assets/icons/logo.svg";
import cartIcon from "../../src/assets/icons/icon-cart.svg";
import hamburger from "../../src/assets/icons/icon-hamburger.svg";
import Navlist from "./Navlist";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto py-8 px-8 h-[10%] xl:h-[90px] border-b xl:px-0 border-blk3">
      <img src={hamburger} alt="hamburger menu icon" className="xl:hidden" />
      <Link to={"/"}>
        <img src={logo} alt="logo" className="cursor-pointer" />
      </Link>
      <div className="hidden items-center gap-10 text-sm xl:flex">
        <Navlist></Navlist>
      </div>
      <Cart />
    </nav>
  );
}

export default Navbar;
