import React, { useState, useEffect } from "react";
import { Header, Nav } from "../components";
import axios from "axios";
import img01 from "../img/clothes01.jpg";
import img02 from "../img/clothes02.jpg";
import img03 from "../img/clothes03.jpg";
import img04 from "../img/clothes04.jpg";
import img05 from "../img/clothes05.jpg";
import img06 from "../img/clothes06.jpg";

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
        <div className="shop-imgdiv">
          <img src={img01} alt=""></img>
        </div>
        <div className="shop-imgdiv">
          <img src={img02} alt=""></img>
        </div>
        <div className="shop-imgdiv">
          <img src={img03} alt=""></img>
        </div>
        <div className="shop-imgdiv">
          <img src={img04} alt=""></img>
        </div>
        <div className="shop-imgdiv">
          <img src={img05} alt=""></img>
        </div>
        <div className="shop-imgdiv">
          <img src={img06} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Shop;
