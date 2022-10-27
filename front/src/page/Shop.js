import React, { useState, useEffect } from "react";
import { Header, Nav } from "../components";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div>
      <Header />
      <Nav />
      {/* <input type="file" className="shop-body-content" /> */}
      <div className="shop-body">
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
        <div className="shop-imgdiv"></div>
      </div>
    </div>
  );
};

export default Shop;
