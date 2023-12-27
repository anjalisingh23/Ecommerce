import React from "react";
import "../Styles/Home.scss";
import UserRun from "../Assets/17.png";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import hand from "../Assets/hand_icon.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section>
        <div className="left">
          <img src={UserRun} alt="user" />
        </div>
        <div className="right">
          <div className="content">
            <span>
              Best Offer's Going <img src={hand} alt="hand" />
            </span>
            <h1 className="title">Shop Right Now</h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              dignissimos sit doloribus molestiae animi sed quam, asperiores ut
              vitae voluptatem necessitatibus corrupti facere soluta aspernatur!
              Architecto magni quam facilis iste?
            </p>

            <button className="collection_Btn">
              Latest Collection
              <BiSolidRightArrowAlt style={{ fontSize: "1rem" }} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
