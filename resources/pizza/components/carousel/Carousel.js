import React from "react";
import { Carousel as RCarousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, useMediaQuery } from "@mui/material";
import theme, { colors } from "../../theme";

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
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  let styles;

  if (isMd) {
    styles = {
      box: {
        padding: 8,
      },
      image: {
        borderRadius: 8,
      },
    };
  } else {
    styles = {
      box: {
        backgroundColor: colors.navbar.main,
      },
      image: {
        maxWidth: "80vw",
      },
    };
  }
  return (
    <RCarousel
      showArrows={!isMd}
      swipeable={true}
      infiniteLoop
      showStatus={false}
      autoPlay
      interval={8000}
      showThumbs={false}
    >
      {SLIDES.map((slide) => (
        <div
          style={{
            position: "relative",
            ...styles.box,
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
              ...styles.image,
            }}
            src={slide.image}
          />
        </div>
      ))}
    </RCarousel>
  );
};

export default Carousel;
