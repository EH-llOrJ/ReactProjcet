import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navi">
      <div className="nav-home-div">
        <Link to="/">HOME</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/about">ABOUT</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/review">REVIEW</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/notify">NOTIFY</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/account">ACCOUNT</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/shoppingbag">SHOPPING BAG</Link>
      </div>
    </div>
  );
};

export default Nav;
