import React, { Component } from "react";
import { useContext } from "react";
import { ProductCont } from "../../contextAPI";
import CartItem from "./CartItem";
import CartTotal from "./CartTotals";
import PayPalButton from "./PayPalButton";
import MyApp from "./PayPalButton";

export default function Cart (props){

   const {storeProducts, detailProduct, productS,DecreaseProduct_count, ClearCart, cart, IncreaseProduct_count, closeModal, addCart,  subTotal,  handleClick} = useContext(ProductCont)
      const { id, title, img, price, company, info, inCart, count, total} = productS

    return (
      <React.Fragment>
        <div className="CartPage_head">
          <h2 className="title_container">Your Cart</h2>
          { (cart.length > 0) ?
         <div> <CartItem/>
          <CartTotal/>
</div>:
                 <div>
                 <h2>Your Cart is Currently Empty</h2>
                           <MyApp  />
</div>
          }

        </div>
          
      </React.Fragment>)
}