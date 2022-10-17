import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navi">
      <div className="nav-home-div">
        <Link to="/borad">Borad</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/login">Login</Link>
      </div>
      <div className="nav-home-div">
        <Link to="/join">Join</Link>
      </div>
    </div>
  );
};

export default Nav;
