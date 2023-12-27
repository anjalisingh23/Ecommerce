import React from "react";
import "./NewsLetter.scss";
const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter_container">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our Newsletter ans stay updated</p>
        <div className="input_action">
          <input type="text" placeholder="Enter your email ID" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
