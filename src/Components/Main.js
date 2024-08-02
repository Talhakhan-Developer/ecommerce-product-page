import React from "react";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { ReactComponent as Icon } from "../images/icon-cart.svg";
import { useState } from "react";
import { useCart } from "./CartContext";

function Main() {
  let [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const updateCart = () => {
    addToCart(count);
    setCount(0);
  };
  return (
    <>
      <div className="main-card p-5 md:w-1/2 md:p-10 md:pr-20">
        <div className="logo-name uppercase text-primary-Orange font-kumbh text-sm font-semibold tracking-wider mb-2">
          <p>Sneaker company</p>
        </div>
        <div className="items-name text-3xl md:text-5xl font-kumbh font-semibold text-neutral-VeryDarkBlue capitalize mb-4">
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="items-description md:text-lg text-neutral-DarkGrayishBlue mb-5">
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="items-price flex md:flex-col md:items-start md:gap-y-3 justify-between w-full mb-3 md:mb-6 items-center">
          <div className="flex md:justify-start md:gap-x-3 justify-between items-center w-1/2 ">
            <p className="Discounted-price text-3xl text-neutral-VeryVarkBlue font-bold">
              $125.00
            </p>
            <p className="Discount p-[5px] rounded bg-primary-PaleOrange text-primary-Orange  font-semibold">
              50%
            </p>
          </div>
          <div>
            <p className="orignal-price line-through text-sm font-medium text-neutral-DarkGrayishBlue">
              $250.00
            </p>
          </div>
        </div>
        <div className="counter-button md:flex md:justify-between gap-x-4">
          <div className="cart-counter md:mb-0 mb-3 bg-neutral-LightGrayishBlue flex justify-between items-center rounded-lg md:w-[35%]">
            <div
              className="minus cursor-pointer p-4 hover:bg-white hover:opacity-50"
              onClick={() => {
                if (count !== 0) {
                  setCount(count - 1);
                }
              }}
            >
              <img src={minus} alt="SVG" />
            </div>
            <div className="number font-medium text-lg">
              <p>{count}</p>
            </div>
            <div
              className="plus cursor-pointer p-4 hover:bg-white hover:opacity-50"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <img src={plus} alt="SVG" />
            </div>
          </div>
          <div
            onClick={updateCart}
            className="button p-4 w-full bg-primary-Orange justify-center flex rounded-lg text-neutral-White gap-x-3 cursor-pointer md:w-[60%]  hover:opacity-50 "
          >
            <Icon fill="white" />
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
