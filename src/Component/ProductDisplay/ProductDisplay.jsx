import React, { useContext, useState } from "react";
import "./ProductDisplay.scss";

import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../ShopContext/ShopContext";

const ProductDisplay = ({ product}) => {
  const {addToCart}=useContext(ShopContext);


  return (
    <>
      <div className="productDisplay_container">
        <div className="productDisplay_left">
          <div className="productDisplay_img_list">
            <img src={product.image} alt="1" />
            <img src={product.image} alt="2" />
            <img src={product.image} alt="3" />
            <img src={product.image} alt="4" />
          </div>
          <div className="productDisplay_image">
            <img
              className="productDisplay_main_image"
              src={product.image}
              alt="1"
            />
          </div>
        </div>
        <div className="productDisplay_right">
          <h1>{product.name}</h1>
          <div className="productDisplay_right_star">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <span>(122)</span>
          </div>
          <div className="productDisplay_right_price">
            <div className="productDisplay_right_price_old">
            ₹{product.old_price}
            </div>
            <div className="productDisplay_right_price_new">
            ₹{product.new_price}
            </div>
          </div>
          <div className="productDisplay_right_description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea,
              quibusdam quod voluptates odio atque dignissimos nam, rerum
              architecto, sed explicabo quasi tenetur? Fugiat cum officiis totam
              sapiente at fugit.
            </p>
          </div>
          <div className="productDisplay_right_size">
            <h1>Select Size</h1>
            <div className="sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>

          <button onClick={()=>addToCart(product.id)}>Add To Cart</button>
          <p className="productDisplay_right_category">
            <p><span>Category : </span> Women,T-Shirt , Crop-Top</p>
            <p><span>Tags : </span>Modern ,  Latest </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
