import { Container, Button, Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from "./Auth.module.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUpUser = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/admin");
      console.log(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Failed to Login");
    }
    setLoading(false);
  };

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={styles.container}>
      <Box component="div" className={styles.header}>
        <Typography className={styles.title}>SignUp</Typography>
      </Box>
      <Container maxWidth="sm">
        <form
          className={styles.form}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          {error && <Typography className={styles.error}>{error}</Typography>}
          <div className={styles.formList}>
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
              <label htmlFor={"password"}>Password</label>
              <input
                type="password"
                id={"password"}
                required={true}
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              size="small"
              type="submit"
              disabled={loading}
              variant="contained"
              className={styles.btn}
              onClick={submitForm}
            >
              SignUp
            </Button>
          </div>
          <div className={styles.links}>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default SignUpUser;
