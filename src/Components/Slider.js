/* eslint-disable array-callback-return */
import { useState, React } from "react";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import LightboxGallery from "./LightboxGallery";

function Slider() {
  let slideApi = [product1, product2, product3, product4];
  let [activeSlide, setActiveSlide] = useState(0);

  function nextSlide() {
    if (activeSlide === slideApi.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  }
  function previousSlide() {
    if (activeSlide === 0) {
      setActiveSlide(slideApi.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  }

  return (
    <>
      <div className="slider-container sm:h-[383px]  w-full flex md:flex-col items-center md:h-[500px] md:w-[480px] ">
        <div className="slider sm:h-[383px] w-full relative flex items-center md:h-[400px] md:pb-5">
          <div
            className="left-arrow absolute left-5 bg-white rounded-[100%] w-8 h-8 flex justify-center items-center cursor-pointer md:hidden"
            onClick={previousSlide}
          >
            <img src={leftArrow} alt="Left arrow" className="h-3" />
          </div>
          {slideApi.map((slide, index) => {
            if (index === activeSlide) {
              return (
                <div
                  className="slide-image h-full w-full md:relative"
                  key={index}
                >
                  <img
                    src={slide}
                    alt="Product img"
                    className="h-full w-full md:rounded-xl"
                  />

                  <LightboxGallery />
                </div>
              );
            }
          })}
          <div
            className="rigth-arrow absolute right-5 bg-white rounded-[100%] w-8 h-8 flex justify-center items-center cursor-pointer md:hidden"
            onClick={nextSlide}
          >
            <img src={rightArrow} alt="Right Arrow" className="h-3" />
          </div>
        </div>
        <div className="pic-selector  justify-between w-full gap-x-7 sm:hidden md:flex">
          <div
            className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl hover:border-primary-Orange hover:border-2"
            onClick={() => setActiveSlide(0)}
          >
            <img
              src={thumbnail1}
              className="h-full w-full rounded-xl hover:bg-white hover:opacity-50 "
              alt="Thumbnail-pic"
            />
          </div>
          <div
            className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl hover:border-primary-Orange hover:border-2"
            onClick={() => setActiveSlide(1)}
          >
            <img
              src={thumbnail2}
              className="h-full w-full md:rounded-xl hover:bg-white hover:opacity-50"
              alt="Thumbnail-pic"
            />
          </div>
          <div
            className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl hover:border-primary-Orange hover:border-2"
            onClick={() => setActiveSlide(2)}
          >
            <img
              src={thumbnail3}
              className="h-full w-full md:rounded-xl hover:bg-white hover:opacity-50"
              alt="Thumbnail-pic"
            />
          </div>
          <div
            className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl "
            onClick={() => setActiveSlide(3)}
          >
            <img
              src={thumbnail4}
              className="h-full w-full md:rounded-xl hover:bg-white hover:opacity-50"
              alt="Thumbnail-pic"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
