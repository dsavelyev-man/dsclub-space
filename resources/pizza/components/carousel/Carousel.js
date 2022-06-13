import React from "react";
import { Carousel as RCarousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@mui/material";
import { colors } from "../../theme";

const SLIDES = [
  {
    image: "/images/pizza/slides/slide1.jpeg",
    to: "/to",
  },
  {
    image: "/images/pizza/slides/slide2.jpeg",
    to: "/to",
  },
  {
    image: "/images/pizza/slides/slide3.jpeg",
    to: "/to",
  },
  {
    image: "/images/pizza/slides/slide4.jpeg",
    to: "/to",
  },
  {
    image: "/images/pizza/slides/slide5.jpeg",
    to: "/to",
  },
];

const Carousel = () => {
  return (
    <RCarousel
      showArrows
      infiniteLoop
      showStatus={false}
      autoPlay
      interval={8000}
      showThumbs={false}
    >
      {SLIDES.map((slide) => (
        <div
          style={{
            backgroundColor: colors.navbar.main,
            position: "relative",
          }}
          key={slide.image}
        >
          <Link
            to={slide.to}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              left: 0,
            }}
          />
          <img
            style={{
              maxWidth: "80vw",
            }}
            src={slide.image}
          />
        </div>
      ))}
    </RCarousel>
  );
};

export default Carousel;
