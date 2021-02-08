import React, { useEffect } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import styles from "./HeroBanner.module.css";
import bannerImg from "../../images/bannerImg.svg";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const TypingAnimation = () => {
  return (
    <Typing loop={true} startDelay={1000} className="head-dynamic">
      <span className={styles.name}>Name...!!</span>
      <Typing.Backspace count={20} delay={1000} />
      <span className={styles.name}>A WEB DEVELOPER...!!</span>
      <Typing.Backspace count={24} delay={1000} />
    </Typing>
  );
};

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={styles.container}>
      <Box
        component="div"
        data-aos="slide-right"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <Typography className={styles.mainTitle}>
          Hello, I am{" "}
          <span>
            <TypingAnimation />
          </span>
        </Typography>
        <Typography className={styles.subTitle}>
          I am a Web Developer with Expertise
          <br /> in TECHNOLOGY
        </Typography>
        <Button className={styles.btn} variant="contained">
          <Link to="/portfolio">Visit Portfolio</Link>
        </Button>
      </Box>
      <Box
        component="div"
        className={styles.imgContainer}
        data-aos="slide-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <img
          className={styles.img}
          src={bannerImg}
          alt="animated hero banner"
        />
      </Box>
    </div>
  );
};

export default HeroBanner;
