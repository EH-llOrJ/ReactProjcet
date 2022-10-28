import React from "react";
import { Header, Nav, Footer } from "../components";

const ShoppingBag = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="basic-body">
        <div className="test-body">
          <div className="test-body1">#</div>
          <div className="test-body2">상품명</div>
          <div className="test-body3">가격</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingBag;
