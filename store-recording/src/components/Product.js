import React from "react";
import { useContext } from "react";
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductCont } from "../contextAPI";
import { Detail_product } from "../contextAPI";

export default function Product () {
 const {storeProducts, detailProduct, productS, addCart, handleClick} = useContext(ProductCont);

return(
  <React.Fragment>
  <div> 
  <div className="Wlcm-note"> Shop online from the comfort of your home </div>
  </div>
<div className="card">
  {storeProducts.map(product => ( 
   <div key = {product.id} className="card-each"> 
     {product.inCart? <div className="card_img1" onClick={()=> handleClick(product.id)}>
           <img className="Card_img" src={product.img} /> </div>:

           <Link to="/Details"> <div className="card_img1">
           <img className="Card_img" src={product.img} />      
      </div></Link>}
      <div> 
           
    </div>
  <div className="card-footer">
    <p className="title">{product.title} </p> <p className="price">${product.price}</p> 
  </div>
     <div className="cart-div"> {product.inCart? <p className="cc" > Item added to Cart </p> : <i onClick = {() => addCart(product.id)} className="fas fa-cart-plus"></i>}</div>       

  </div>
)
  ) 
  }
</div>  </React.Fragment>
)}
         