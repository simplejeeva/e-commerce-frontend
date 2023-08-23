import React from "react";
import { useState } from "react";

import "./slideimage.css";
export const SliderImages = () => {
  const sliderImages = [
    {
      url: "https://assets.indiadesire.com/images/paytm%20dslr10k%20camera%20offer.jpg",
    },
    {
      url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg",
    },
    {
      url: "https://sridurgaenterprises.co.in/wp-content/uploads/2018/10/HP-Laptop-Offer.png",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXL-gBf8hEsZZ6TxrFGUTo_xn8bB0e4T3ew&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeiAeVAvZitiKc7A6Fpe_nMbUPu-QsTauy6hZ2dFZRTa7LRTdyF8op4t79PrRL6-JG7w&usqp=CAU",
    },
    {
      url: "https://media.karousell.com/media/photos/products/2022/3/16/apple_iphone_13_1647441738_3ca0c273_progressive",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIjd2CBxXsHdiAB6cXLAHOA7TzuZVf6Z5CoEHwpGTy_1-9swuYzSn0O1ETQOMTrGgsCE&usqp=CAU",
    },
  ];
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div>
      <section className="image-slider">
        <div class="left">
          <i class="bi bi-chevron-left fa-10x" onClick={prevSlide}></i>
          {/* <SlArrowLeft  /> */}
        </div>
        <div class="right">
          <i class="bi bi-chevron-right fa-10x" onClick={nextSlide}></i>
        </div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
              key={ind}
            >
              {ind === activeImageNum && (
                <img src={currentSlide.url} className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
