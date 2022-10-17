import React from "react";
import { Header, Body, Nav } from "../components";
const Main = ({ islogin }) => {
  return (
    <div>
      <Header title="메인페이지" />
      <Nav />
      <Body islogin={islogin} />
    </div>
  );
};

export default Main;
