import React from "react";
import "./RelatedProducts.scss";

import data_product from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <>
      <div className="relatedProducts_container">
        <h1 className="relate_products">Related Products</h1>

        <div className="relatedProducts_items">
          {data_product.map((data, index) => (
            <Item
              key={index}
              id={data.id}
              name={data.name}
              image={data.image}
              old_price={data.old_price}
              new_price={data.new_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
