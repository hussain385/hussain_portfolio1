import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import styles from "./Offer.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  let [email, setEmail] = useState("");

  const getEmail = () => {
    console.log(email);
  };

  const offerData = [
    {
      title: "BASIC",
      offer1: "OFFER1",
      price1: "RS.XX",
      offer2: "OFFER2",
      price2: "RS.XX",
      offer3: "OFFER3",
      price3: "RS.XX",
      offer4: "OFFER4",
      price4: "RS.XX",
      offer5: "OFFER5",
      price5: "RS.XX",
    },
    {
      title: "STANDARD",
      offer1: "OFFER1",
      price1: "RS.XX",
      offer2: "OFFER2",
      price2: "RS.XX",
      offer3: "OFFER3",
      price3: "RS.XX",
      offer4: "OFFER4",
      price4: "RS.XX",
      offer5: "OFFER5",
      price5: "RS.XX",
    },
    {
      title: "PREMIUM",
      offer1: "OFFER1",
      price1: "RS.XX",
      offer2: "OFFER2",
      price2: "RS.XX",
      offer3: "OFFER3",
      price3: "RS.XX",
      offer4: "OFFER4",
      price4: "RS.XX",
      offer5: "OFFER5",
      price5: "RS.XX",
    },
  ];
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="400">
      <Box
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <Typography className={styles.title}>MY OFFERS</Typography>
      </Box>
      <Container maxWidth="md">
        <Grid container spacing={3} className={styles.container}>
          {offerData.map((offer) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-delay="400"
              >
                <Card className={styles.offerCard}>
                  <CardContent>
                    <Typography className={styles.cardTitle}>
                      {offer.title}
                    </Typography>
                    <Typography className={styles.offer}>
                      {offer.offer1} = {offer.price1}
                    </Typography>
                    <Typography className={styles.offer}>
                      {offer.offer2} = {offer.price2}
                    </Typography>
                    <Typography className={styles.offer}>
                      {offer.offer3} = {offer.price3}
                    </Typography>
                    <Typography className={styles.offer}>
                      {offer.offer4} = {offer.price4}
                    </Typography>
                    <Typography className={styles.offer}>
                      {offer.offer5} = {offer.price5}
                    </Typography>
                    <hr />
                    <Typography className={styles.offer}>
                      Total = RS.XXX
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        className={styles.footContainer}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <Typography className={styles.footerTitle}>GOT A PROJECT</Typography>
        <Typography className={styles.footerContent}>
          Got an Idea?? Email me at abc@abc.com OR Click below
        </Typography>
        <Button variant="contained" className={styles.btn}>
          <Link to="/contact">Contact</Link>
        </Button>
      </Container>
      <Container maxWidth="md" className={styles.newsletter}>
        <Typography className={styles.signUpTitle}>
          SUBSCRIBE TO MY NEWSLETTER
        </Typography>
        <Typography className={styles.signUpContent}>
          Get the latest update into your inbox
        </Typography>
        <Box
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={getEmail} className={styles.btnSignUp}>
            SignUp
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Offer;
