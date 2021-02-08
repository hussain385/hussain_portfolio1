import React, { useEffect } from "react";
import { Box, Container, Typography } from "@material-ui/core";
import facebook from "../../images/facebook.png";
import fiverr from "../../images/fiverr.png";
import twitter from "../../images/twitter.png";
import Logo from "../../images/logo.png";
import github from "../../images/github.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className={styles.container}
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="400"
    >
      <Container component="div" maxWidth="md">
        <Box component="div" className={styles.subContainer}>
          <Box className={styles.mainContainer}>
            <img className={styles.logo} src={Logo} alt="logo" />
            <Typography className={styles.address}>Your address</Typography>
            <Box className={styles.imgContainer}>
              <a href="facebook.com">
                <img
                  className={styles.img}
                  src={facebook}
                  alt={"facebook link"}
                />
              </a>
              <a href="twitter.com">
                <img
                  className={styles.img}
                  src={twitter}
                  alt={"twitter link"}
                />
              </a>
              <a href="github.com">
                <img className={styles.img} src={github} alt={"github link"} />
              </a>
              <a href="fiverr.com">
                <img className={styles.img} src={fiverr} alt={"fiverr link"} />
              </a>
            </Box>
          </Box>
          <Box>
            <Typography className={styles.linkTitle}>Heading 1</Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
          </Box>
          <Box>
            <Typography className={styles.linkTitle}>Heading 2</Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
          </Box>
          <Box>
            <Typography className={styles.linkTitle}> Heading 3</Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
            <Typography className={styles.links}>
              <a href="google.com">Links</a>
            </Typography>
          </Box>
          <Box>
            <Typography className={styles.login}>
              <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
