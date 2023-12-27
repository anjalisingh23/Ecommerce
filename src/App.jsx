import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopCategory from "./Component/Pages/ShopCategory";
import Product from "./Component/Pages/Product";
import Cart from "./Component/Pages/Cart";
import Login from "./Component/Pages/Login";
import Shop from "./Component/Pages/Shop";
import Footer from "./Component/Footer/Footer";

import mens_banner from "./Component/Assets/banner_mens.png";
import womens_banner from "./Component/Assets/banner_women.png";
import kids_banner from "./Component/Assets/banner_kids.png";
import SignUp from "./Component/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={mens_banner} category={"men"} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womens_banner} category={"women"} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category={"kid"} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
