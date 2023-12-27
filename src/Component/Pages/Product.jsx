import React, { useContext } from "react";
import "../Styles/Product.scss";
import {ShopContext} from "../ShopContext/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../Breadcrums/BreadCrums";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const Product = () => {
  let {all_product } = useContext(ShopContext);
  let { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <BreadCrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </>
  );
};

export default Product;
