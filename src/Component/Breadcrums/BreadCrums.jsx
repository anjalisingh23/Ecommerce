import React from "react";
import "./BreadCrums.scss";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCrums = ({product}) => {
  
  return (
    <>
      <div className="breadcrums_container">
        HOME <img src={arrow_icon} alt="arrow" /> SHOP
        <img src={arrow_icon} alt="arrow" /> {product.category}
        <img src={arrow_icon} alt="arrow" /> {product.name}
      </div>
    </>
  );
};

export default BreadCrums;
