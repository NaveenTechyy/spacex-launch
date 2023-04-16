import React from "react";
import "./Home.css";

import Section from "../HomePages/section/Section";
import Footer from "../HomePages/footer/Footer";
import Cards from "../HomePages/cards/Cards";

const Home = () => {
  return (
    <>
      <Section />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
