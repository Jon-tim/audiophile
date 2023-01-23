import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../src/assets/icons/icon-cart.svg";
function Cart() {
  const modal = useRef();
  const [toggleCart, setToggleCart] = useState(false);
  const handleCartToggle = () => {
    setToggleCart((prev) => !prev);
  };

  return (
    <section className="relative">
      <div className="relative cursor-pointer" onClick={handleCartToggle}>
        <img src={cartIcon} alt="cart icon" />
        <span></span>
      </div>
      <section
        ref={modal}
        className={`cartModal ${
          toggleCart ? "block" : "hidden"
        } absolute top-10 right-0 rounded-xl bg-white overflow-hidden w-72 h-max transition-height duration-300 ease-linear p-4`}
      >
        <div className="flex items-center justify-between text-blk3">
          <p className="font-bold">
            Cart <span>(5)</span>
          </p>

          <a href="#" className="">
            Remove all
          </a>
        </div>
        <div
          className="flex items-center justify-between text-blk3
        "
        >
          <p className="uppercase font-semibold">total</p>
          <p>
            $<span>1000</span>
          </p>
        </div>
        <Link
          to={'checkout'}
          className="h-12 w-full grid place-items-center bg-orangeText text-white uppercase"
        >
          checkout
        </Link>
        {/* <EmptyCart /> */}
      </section>
    </section>
  );
}

function EmptyCart() {
  return (
    <div className="grid place-items-center">
      <p>Warra Empty cart for User! 🛒</p>
      🙈🙉🙊
    </div>
  );
}

export default Cart;
