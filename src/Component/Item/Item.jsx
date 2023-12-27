import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'
const Item = ({name,image,old_price,new_price,id}) => {
  return (
   <>
    <div className="item">
       <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0,)} src={image} alt="image" /></Link> 
        <p>{name}</p>
        <div className="item_prices">
        
            <div className="item_price_old">
            ₹{old_price}
            </div>
            <div className="item_price_new">
            ₹{new_price}
            </div>
        </div>
    </div>
   </>
  )
}

export default Item