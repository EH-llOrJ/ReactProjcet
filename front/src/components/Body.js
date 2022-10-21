import React from "react";
import img1 from "../img/pas_main.jpg";

const Body = ({ text }) => {
  return (
    <div className="body">
      {text}
      <img src={img1} alt=""></img>
    </div>
  );
};

export default Body;
