import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AdminUser = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  const handlerLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  // This data will come from database
  const data = [
    { name: "Hello", email: "vw@vw.vw", comments: "hello world" },
    { name: "World", email: "vq@vq.vq", comments: "hello world" },
    { name: "My", email: "ww@ww.ww", comments: "hello world" },
    { name: "Computer", email: "vv@vv.vv", comments: "hello world" },
  ];

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={styles.container}>
      <Container maxWidth="md">
        <Box component="div" className={styles.header}>
          <Typography className={styles.title}>Admin Panel</Typography>
          <Button
            onClick={handlerLogout}
            variant="contained"
            className={styles.btn}
          >
            Logout
          </Button>
        </Box>
        {error && <Typography className={styles.error}>{error}</Typography>}
        <Box component="div">
          <Grid container spacing={3}>
            {data.map((data) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="400"
                >
                  <Card className={styles.card}>
                    <CardContent>
                      <Typography className={styles.name}>
                        Name: {data.name}
                      </Typography>
                      <Typography className={styles.email}>
                        Email: {data.email}
                      </Typography>
                      <Typography className={styles.comments}>
                        Comments: {data.comments}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AdminUser;
