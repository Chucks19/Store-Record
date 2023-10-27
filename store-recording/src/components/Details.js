import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {ProductCont} from "../contextAPI"

export default function Details () {
   const {storeProducts, detailProduct, productS, addCart, handleClick} = useContext(ProductCont);



const { id, title, img, price, company, info, inCart, count, total} = productS


  return (
     <div className="details">
      <div className="title_container"><h1 className="title"> </h1>{title}</div>
      <div className="img_container"><img src = {img} alt={`{title}`} /></div>
      <div className="btt_title"><h4>Model: {title}</h4></div>
      <div className="company"><h4> Made By: {company}</h4></div>
      <div className="Det_price"><h4> Price: ${price}</h4></div>
      <div className="info"> <h4> Some Info about the Products: {info}</h4></div>
      <div className="det_button"><Link to= "/">  <button>Back to Product</button></Link></div>
      <div className="det_cart"> <Link to="/Cart">{inCart?<button>In cart</button> : <button onClick = {() => addCart(id)}> Add to Cart </button>}</Link></div>


     </div> 
  
)
}
