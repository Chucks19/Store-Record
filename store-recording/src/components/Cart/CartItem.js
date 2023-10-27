import React, { useContext } from "react";
import {ProductCont} from "../../contextAPI";




export default function CartItem() {
   const {storeProducts, detailProduct, productS, DecreaseProduct_count, cart, IncreaseProduct_count, Remove,  closeModal, addCart, handleClick} = useContext(ProductCont)
 
  return(
    <React.Fragment><div className= "Cart_page">
        {cart.map(cart => 
          <div key = {cart.id} className = "CartList">
                  <div className="cartitem">  <h2>Product</h2> <img src = {cart.img}/></div>
                   <div className="cartitem">  <h2>Name of Product</h2> <p>{cart.title} </p></div>
                   <div className="cartitem">  <h2>Price</h2> <p>{cart.price} </p></div>
                  <div className="cartitem"> <h2>Quantity</h2> <p> <span className="Inc_Decr" onClick={()=> DecreaseProduct_count(cart.id)}>-</span><span className="Inc_Decr">{cart.count}</span>
                                              <span className="Inc_Decr" onClick={()=> IncreaseProduct_count(cart.id)}> + </span></p> </div>
                   <div className="cartitem">  <h2>Remove</h2> <p><i className="fa fa-trash" onClick={()=> Remove(cart.id)}/> </p></div>
                   <div className="cartitem">  <h2>Total</h2> <p>Ttem Total : ${cart.total} </p></div>

          </div>
        )}
   </div> </React.Fragment>
  ) }