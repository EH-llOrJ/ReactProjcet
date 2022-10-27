import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginAction } from "../redux/middleware/loginAction";

const Nav = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const logout = () => {
    dispatch(loginAction.logout());
  };

  return (
    <div className="nav-section">
      <div className="nav-section-inside inside-left"></div>
      <div className="nav-section-inside inside-center">
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
      </div>
      <div className="nav-section-inside inside-right">
        {/* <div className="nav-home-div">
          <Link to="/account">ACCOUNT</Link>
        </div> */}
        <div className="nav-home-div">
          <Link to="/login">
            {isLogin ? <div onClick={logout}>LOGOUT</div> : <div>LOGIN</div>}
          </Link>
        </div>
        <div className="nav-home-div">
          <Link to="/join">JOIN</Link>
        </div>
        <div className="nav-home-div">
          <Link to="/shoppingbag">SHOPPING BAG</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
