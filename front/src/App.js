import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Main,
  Borad,
  Blogs,
  Login,
  Join,
  About,
  Shop,
  Review,
  Notify,
  Account,
  ShoppingBag,
} from "./page";
// import { useState } from "react";
// import { logins } from "./redux/middleware";
import { useSelector } from "react-redux";
function App() {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const LoginRedirect = () => {
    return isLogin === true ? <Borad /> : loginMessage();
    function loginMessage() {
      alert("로그인 해주세요");
      return <Navigate to="/" />;
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shoppingBag" element={<ShoppingBag />} />
        <Route path="/borad" element={<LoginRedirect />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
