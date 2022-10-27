import React from "react";
import { Header, Nav, Footer } from "../components";
import img_about01 from "../img/pas_about.jpg";
import img_about02 from "../img/pas_about_hover.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="basic-body">
        <img className="about-imgBox img__h" src={img_about01} alt=""></img>
        <img className="about-imgBox img__hover" src={img_about02} alt=""></img>
      </div>
      <Footer />
    </div>
  );
};

export default About;
