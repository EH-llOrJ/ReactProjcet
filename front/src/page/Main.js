import React from "react";
import { Header, Body, Nav, Footer } from "../components";
const Main = ({ islogin }) => {
  return (
    <div>
      {/* <Header title="메인페이지" /> */}
      <Header />
      <Nav />
      <Body islogin={islogin} />
      <Footer />
    </div>
  );
};

export default Main;
