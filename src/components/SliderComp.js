import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthBgImage } from "./FullWidthBgImage";
// import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
// import { useResponsive } from "./useResponsive";
// import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";





export const SliderComp = ({
  data,
  label,
  heading,
  subheading,
  slideNum,
  autoplay,
  autoplaySpeed
}) => {

  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    // slidesToShow: slides,
    // slidesToScroll: slides
    slidesToShow: window.innerWidth < 768 ? 1 : slideNum,
    slidesToScroll: 1
  };

  return (
    <>
      <div style={{ marginBottom: 20, marginLeft: 10 }}>
        <p>{subheading}</p>
      </div>
      <div className="container">
      <h2>{heading}</h2>
        <div className="wrapper">

          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <div
                  
                >
                  <FullWidthBgImage
                    image={item.image}
                    text={item.title}
                    subText={item.subTitle}
                    borderRadius={"10px"}
                  />
                </div>
              ))}
          </Slider>
          {/* {window.innerWidth > 768 && (
            <div onClick={() => sliderRef.current.slickNext()} className="next">
              <FiArrowRightCircle style={{ fontSize: 24 }} />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};
