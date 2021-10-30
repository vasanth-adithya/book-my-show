import React, { useState } from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow() {
  return <></>;
}

function PreviousArrow() {
  return <></>;
}

const HeroCarousel = () => {
  const [images, setImages] = useState([
    "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630045372422_bellbottomunderthestarspvrdriveinexperience_webshowcase_1240x300.jpg",
  ]);

  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return <></>;
};

export default HeroCarousel;
