import React from "react";
import "./Offers.scss";
import user from "../Assets/6.png";
const Offers = () => {
  return (
    <>
      <div className="offers_container">
        <div className="offer_left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLER PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="offer_right">
          <img src={user} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Offers;
