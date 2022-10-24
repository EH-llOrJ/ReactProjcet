import React from "react";
import { Header, Nav } from "../components";

const Shop = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="shop-body">
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
      </div>
    </div>
  );
};

export default Shop;
