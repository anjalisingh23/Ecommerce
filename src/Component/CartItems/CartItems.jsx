import React, { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../ShopContext/ShopContext";
import Remove from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  let { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <>
      <div className="cartItems_container">
        <h3 className="cart_head">Cart Items : </h3>

        <div className="cart_itemsBox">
          {all_product.map((data) => {
            if (cartItems[data.id] > 0) {
              return (
                <div key={data.id} className="cartItem_box">
                  <div className="table-responsive">
                    <table className="table  text-center table-hover table-responsive table-bordered align-middle">
                      <thead className="table-dark">
                        <tr className="text-center bg-dark text-white">
                          <th>Product</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <img
                              src={data.image}
                              alt=""
                              className="cartItem_product_icon"
                            />
                          </td>
                          <td>
                            <p>{data.name.slice(0, 20)}</p>
                          </td>
                          <td>
                            <p>₹{data.new_price}</p>
                          </td>
                          <td>
                            <button className="cartItem_quantity">
                              {cartItems[data.id]}
                            </button>
                          </td>
                          <td>
                            <p>₹{data.new_price * cartItems[data.id]}</p>
                          </td>

                          <td>
                            <button
                              className="cartitem_remove_icon"
                              onClick={() => removeFromCart(data.id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="cart_items_below">
          <div className="cart_item_total">
            <h2>Cart Total</h2>

            <div className="cart_items_total_item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="cart_items_total_item">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <div className="cart_items_total_item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
            <button>Proceed to checkOut</button>
          </div>
          <div className="cartItems_promobox">
            <h3>Coupon Code</h3>
            <input type="text" placeholder="Enter your code" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
