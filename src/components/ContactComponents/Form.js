import { Button, Container, Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [comments, setComments] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(fullName, email, comments);
    setFullName("");
    setEmail("");
    setComments("");
  };

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={styles.container}>
      <Box component="div" className={styles.header}>
        <Typography className={styles.title}>
          Got a Project?? Just fill the Form below
        </Typography>
      </Box>
      <Container maxWidth={"sm"} className={styles.form}>
        <form
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <div className={styles.formList}>
            <div className={styles.formComponent}>
              <label htmlFor={"fullName"}>FullName</label>
              <input
                type="text"
                id={"fullName"}
                required={true}
                className={styles.input}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className={styles.formComponent}>
              <label htmlFor={"email"}>Email</label>
              <input
                type="email"
                id={"email"}
                required={true}
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formComponent}>
              <label htmlFor={"comments"}>Comments</label>
              <textarea
                type="text"
                id={"comments"}
                required={true}
                className={styles.input}
                row={4}
                cols={60}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <Button
              size="small"
              type="submit"
              variant="contained"
              className={styles.btn}
              onClick={submitForm}
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Form;
