import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext();

//Default cart Function:
let getDefaultCart = () => {
  let cart = {};

  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

//Shop Context Function:
const ShopContextProvider = (props) => {
  let [cartItems, setCartItems] = useState(getDefaultCart());

  //Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  //Remove Cart Item:
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //Total Cart Amount:
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  //Total Cart CountValue
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
//Context value initialize to one variable
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
