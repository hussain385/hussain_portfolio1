import React, { useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import styles from "./Work.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioComponents = ({ title, img, details, link }) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="400"
    >
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            className={styles.img}
            component="img"
            alt="image1"
            height="140"
            image={img}
            title="Restaraunt App"
          />
          <CardContent>
            <Typography
              className={styles.cardTitle}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography
              className={styles.details}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            className={styles.btn}
            size="small"
            color="primary"
          >
            <a href={link}>View</a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PortfolioComponents;
