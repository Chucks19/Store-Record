import React  from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {ProductCont} from "../contextAPI"


export default function Modal(){
  const {storeProducts, detailProduct, closeModal, productS, Mode, addCart, handleClick} = useContext(ProductCont)

  const { id, title, img, price, company, info, inCart, count, total} = productS
  if (!productS.mode){
     return (null)} 
     else {
      return (
    
    <div className="Modal_container">
   <div className="Modal">
    <div className="title_container"><h1 className="title"> </h1> Item Added to cart</div>
    <div className="img_container"><img src = {img} alt={`{title}`} /></div>
    <div className="btt_title"><h4>Model: {title}</h4></div>
    <div className="Det_price"><h4> Price: ${price}</h4></div>
    <div className="det_button" onClick={()=> closeModal(id)}><Link to= "/">  <button>Store</button></Link></div>
        <div className="det_button" onClick={()=> closeModal(id)}><Link to= "/Cart">  <button>Go to Cart</button></Link></div>
</div>  
</div>
  )

}}