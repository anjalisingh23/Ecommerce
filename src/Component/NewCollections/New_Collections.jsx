import React from "react";
import "./NewCollections.scss";
import New_Collections from "../Assets/new_collections";
import Item from "../Item/Item";
const NewCollections = () => {
  return (
    <>
    
      <div className="newCollection_container">
        <h1>NEW COLLECTIONS</h1>
        <div className="collections">
          {New_Collections.map((collection, index) => (
            <Item
              key={index}
              id={collection.id}
              name={collection.name}
              image={collection.image}
              old_price={collection.old_price}
              new_price={collection.new_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewCollections;
