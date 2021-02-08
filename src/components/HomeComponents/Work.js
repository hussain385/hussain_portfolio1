import { Typography, Box, Grid, Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import styles from "./Work.module.css";
import image1 from "../../images/restaraunt.jpeg";
import image2 from "../../images/covid.jpg";
import image3 from "../../images/chat.png";
import { Link } from "react-router-dom";
import PortfolioComponents from "./PortfolioComponents";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="400">
      <Box
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
      >
        <Typography className={styles.title}>MY WORK</Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid className={styles.container} container spacing={3}>
          <PortfolioComponents
            img={image1}
            title={"Restaraunt App"}
            details={"Details of Restaraunt App"}
            link={"www.google.com"}
          />
          <PortfolioComponents
            img={image2}
            title={"COVID App"}
            details={"Details of COVID App"}
            link={"www.google.com"}
          />
          <PortfolioComponents
            img={image3}
            title={"Chat App"}
            details={"Details of Chat App"}
            link={"www.google.com"}
          />
        </Grid>
      </Container>
      <Box
        className={styles.btnContainer}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <Button className={styles.btnLink}>
          <Link to="/portfolio">View More</Link>
        </Button>
      </Box>
    </div>
  );
};

export default Work;
