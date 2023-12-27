import React, { useContext } from "react";
import "../Styles/ShopCategory.scss";
import dropDown_icon from "../Assets/dropdown_icon.png";
import { ShopContext } from "../ShopContext/ShopContext";
import Item from "../Item/Item";
const ShopCategory = (props) => {
  const { all_product} = useContext(ShopContext);
  return (
    <>
      <div className="shopCategory_banner">
        <img className="shopCategory_banner" src={props.banner} alt="men_banner" />

        <div className="shop_category_indexSort">
          <p>
            <span>Showing 1-12</span> Out of 36 Products
          </p>
          <div className="shop_category_sort">
            Sort by <img src={dropDown_icon} alt="dropDown" />
          </div>
        </div>
        <div className="shop_category_products">
          {all_product.map((data, index) => {
            if (props.category === data.category) {
              return (
                <Item
                  key={index}
                  id={data.id}
                  name={data.name}
                  image={data.image}
                  old_price={data.old_price}
                  new_price={data.new_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopCategory_loadMore">
          Explore More
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
