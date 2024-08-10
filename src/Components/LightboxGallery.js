/* eslint-disable array-callback-return */
import React from "react";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import { ReactComponent as Close } from "../images/icon-closeC.svg";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import { useState } from "react";

function LightboxGallery() {
  let slideApi = [product1, product2, product3, product4];

  let [activeGallery, setActiveGallery] = useState(" hidden");

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
      <div
        className="lightbox-gallery hidden md:block md:cursor-pointer h-full w-full md:absolute md:top-0 md:left-0"
        onClick={() => setActiveGallery(" fixed")}
      ></div>
      {/* Lightbox Gallery */}
      <div
        className={`screen-overlay w-screen h-screen bg-black opacity-75 ${activeGallery} top-0 left-0`}
      ></div>
      <div
        className={`Lightbox-Gallery w-screen h-screen ${activeGallery} top-0 left-0`}
      >
        <div className="lightboxGallery flex w-screen h-screen justify-center items-center">
          <div className="slider-container h-[300px] w-full flex md:flex-col items-center md:h-[500px] md:w-[480px] ">
            <div className="slider w-full relative flex items-center md:h-[400px] md:pb-5">
              <div
                className="left-arrow absolute -left-3 bg-white rounded-[100%] w-8 h-8 flex justify-center items-center cursor-pointer z-50"
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
                      <div
                        className="lightbox-close absolute right-2 -top-7 cursor-pointer"
                        onClick={() => setActiveGallery(" hidden")}
                      >
                        <Close
                          fill="#FF7D1A"
                          height={20}
                          width={20}
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                  );
                }
              })}
              <div
                className="rigth-arrow absolute -right-3 bg-white rounded-[100%] w-8 h-8 flex justify-center items-center cursor-pointer "
                onClick={nextSlide}
              >
                <img src={rightArrow} alt="Right Arrow" className="h-3" />
              </div>
            </div>
            <div className="pic-selector flex justify-between w-full gap-x-7">
              <div
                className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl bg-neutral-White hover:border-primary-Orange hover:border-2"
                onClick={() => setActiveSlide(0)}
              >
                <img
                  src={thumbnail1}
                  className={`h-full w-full md:rounded-xl ${
                    activeSlide === 0 ? "bg-white opacity-50" : ""
                  } hover:bg-white hover:opacity-50`}
                  alt="Thumbnail-pic"
                />
              </div>
              <div
                className="slide-pic w-24 h-24  hover:cursor-pointer rounded-xl bg-neutral-White hover:border-primary-Orange hover:border-2"
                onClick={() => setActiveSlide(1)}
              >
                <img
                  src={thumbnail2}
                  className={`h-full w-full md:rounded-xl ${
                    activeSlide === 1 ? "bg-white opacity-50" : ""
                  } hover:bg-white hover:opacity-50`}
                  alt="Thumbnail-pic"
                />
              </div>
              <div
                className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl bg-neutral-White hover:border-primary-Orange hover:border-2"
                onClick={() => setActiveSlide(2)}
              >
                <img
                  src={thumbnail3}
                  className={`h-full w-full md:rounded-xl ${
                    activeSlide === 2 ? "bg-white opacity-50" : ""
                  } hover:bg-white hover:opacity-50`}
                  alt="Thumbnail-pic"
                />
              </div>
              <div
                className="slide-pic w-24 h-24 hover:cursor-pointer rounded-xl bg-neutral-White hover:border-primary-Orange hover:border-2"
                onClick={() => setActiveSlide(3)}
              >
                <img
                  src={thumbnail4}
                  className={`h-full w-full md:rounded-xl ${
                    activeSlide === 3 ? "bg-white opacity-50" : ""
                  } hover:bg-white hover:opacity-50`}
                  alt="Thumbnail-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LightboxGallery;
