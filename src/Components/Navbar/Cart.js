import { React, useState } from "react";
import { ReactComponent as Basket } from "../../images/icon-cart.svg";
import deleteIcon from "../../images/icon-delete.svg";
import productImg from "../../images/image-product-1-thumbnail.jpg";
import { useCart } from "../CartContext";

function Cart() {
  let [showCart, setShowCart] = useState(false);

  const { cartCount, removeCartCount } = useCart();

  let opacity = "opacity-0";
  let zIndex = 49;
  if (showCart === true) {
    opacity = "opacity-100";
    zIndex = 50;
  }

  return (
    <>
      <div
        onClick={() => setShowCart(!showCart)}
        className="cart-logo relative cursor-pointer "
      >
        {cartCount > 0 && (
          <p className="Cart-number absolute -top-[6px] -right-2 text-neutral-White bg-primary-Orange rounded-r-full rounded-l-full text-xs pl-[6px] pr-[6px] ">
            {cartCount}
          </p>
        )}
        <Basket fill="#69707D" className="hover:fill-black" />
      </div>
      <div
        className={`cart-wrapper ${opacity} absolute bg-white top-20 right-4 w-[350px] h-[260px]  rounded-lg shadow-md z-${zIndex}`}
      >
        <div className="cart-header p-4">
          <h1 className="text-lg font-semibold">Cart</h1>
        </div>
        <hr />
        <div className="cart-body p-4 h-[199px] ">
          {cartCount === 0 ? (
            // Cart is Empty
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-sm text-neutral-DarkGrayishBlue font-semibold">
                Your cart is empty.
              </p>
            </div>
          ) : (
            // Cart Item
            <div className="cart-items flex flex-col w-full">
              <div className="item-detail flex justify-between items-center mb-5">
                <img
                  src={productImg}
                  alt="Cart-item-img"
                  className="product-img w-16 h-16 rounded-lg"
                />
                <div className="item-text flex flex-col  justify-center ">
                  <p className="text-lg text-neutral-DarkGrayishBlue">
                    Autum Limited Edition...
                  </p>
                  <div className="flex">
                    <p className="text-neutral-DarkGrayishBlue mr-2">
                      $125.00 X {cartCount}
                    </p>
                    <p className="font-semibold">${cartCount * 125}.00</p>
                  </div>
                </div>
                <div
                  onClick={removeCartCount}
                  className="item-delete flex justify-center cursor-pointer"
                >
                  <img
                    src={deleteIcon}
                    alt="Icon"
                    className="delete-icon w-4 h-5"
                  />
                </div>
              </div>
              <div className="item-button" onClick={() => setShowCart(false)}>
                <p className="btn w-full p-4 text-center bg-primary-Orange text-neutral-White font-medium rounded-lg cursor-pointer hover:opacity-50">
                  Checkout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
