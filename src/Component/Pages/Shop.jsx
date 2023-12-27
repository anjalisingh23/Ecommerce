import React from "react";
import Home from "../Pages/Home";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import NewCollections from "../NewCollections/New_Collections";
import NewsLetter from "../NewsLetter/NewsLetter";
import '../Styles/Shop.scss'
const Shop = () => {
  return (
    <>
      <div className="shop_container
      ">
        <Home />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </div>
    </>
  );
};

export default Shop;
