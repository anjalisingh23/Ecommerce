import React from 'react'
import './Popular.scss';
import Product_data from '../Assets/data'
import Item from '../Item/Item';
const Popular = () => {
  return (
    <>
        <div className="popular">
   <h1 className='popular_womens'>POPULAR IN WOMENS</h1>
   <div className="popular_items">
    {Product_data.map((data,index)=>(
        <Item key={index} id={data.id} name={data.name} image={data.image} old_price={data.old_price} new_price={data.new_price}/>
    ))}
   </div>
        </div>
    </>
  )
}

export default Popular