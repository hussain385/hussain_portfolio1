import { Box, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import React, { useEffect } from "react";
import styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <Typography
        className={styles.title}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        ABOUT ME
      </Typography>
      <Box component="div" className={styles.subContainer}>
        <Box
          component="div"
          className={styles.textContainer}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Typography className={styles.text}>
            Yevgeniy (Jim) Brikman loves programming, writing, speaking,
            traveling, and lifting heavy things. He does not love talking about
            himself in the 3rd person. He is the co-founder of Gruntwork, a
            company that provides DevOps as a Service. He's also the author of
            two books published by O'Reilly Media.
          </Typography>
        </Box>
        <Box
          className={styles.timeline}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2010</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Study</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2012</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Graduated</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2014</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Started Work</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2016</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Successful</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </div>
  );
};

export default About;
