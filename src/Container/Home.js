import React from "react";
import HeroBanner from "../components/HomeComponents/HeroBanner";
import About from "../components/HomeComponents/About";
import Work from "../components/HomeComponents/Work";
import Skills from "../components/HomeComponents/Skills";
import Offer from "../components/HomeComponents/Offer";

// These are the main route pages that has been used in routing in the config folder

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <Work />
      <Skills />
      <Offer />
    </div>
  );
};

export default Home;
