import React from "react";
import { Header, Nav, Footer } from "../components";
import img_about1 from "../img/pas_about.jpg";
import img_about2 from "../img/pas_about_hover.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="about-body">
        <img className="about-imgBox" src={img_about1} alt=""></img>
        <img className="about-imgBox img__hover" src={img_about2} alt=""></img>
      </div>
      <Footer />
    </div>
  );
};

export default About;
