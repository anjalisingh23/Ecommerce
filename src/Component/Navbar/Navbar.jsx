import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { AiOutlineDingtalk } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext/ShopContext";

const Navbar = () => {
  let [current, setCurrent] = useState("Home");
  let { getTotalCartItems } = useContext(ShopContext);
  let [toggle, setToggle] = useState(false);

  function ToggleMenu() {
    setToggle(!toggle);
  }

  return (
    <div>
      <nav>
        <div className="nav_logo" onClick={() => setCurrent("Shop")}>
          <span onClick={ToggleMenu}>
            {!toggle ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </span>

          <Link to="/">
            <span>
              <AiOutlineDingtalk />
            </span>
            ShopNow{" "}
          </Link>
        </div>
        <div id="menus" className="menus">
          <ul className={!toggle ? "nav-show" : "nav-hide"}>
            <Link to="/">
              <li
                onClick={() => setCurrent("Shop")}
                className={current === "Shop" ? "active" : ""}
              >
                Home
              </li>
            </Link>
            <Link to="/mens">
              <li
                onClick={() => setCurrent("Mens")}
                className={current === "Mens" ? "active" : ""}
              >
                Men
              </li>
            </Link>

            <Link to="womens">
              <li
                onClick={() => setCurrent("Womens")}
                className={current === "Womens" ? "active" : ""}
              >
                Women
              </li>
            </Link>
            <Link to="/kids">
              <li
                onClick={() => setCurrent("Kids")}
                className={current === "Kids" ? "active" : ""}
              >
                Kids
              </li>
            </Link>
          </ul>
        </div>
        <div className="actions">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <div className="cart">
            <Link to="/cart">
              <span>
                <CiShoppingCart />
              </span>
              <p className="nav_cart_count">{getTotalCartItems()}</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
