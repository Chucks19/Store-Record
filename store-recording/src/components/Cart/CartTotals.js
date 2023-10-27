import React, {useContext} from "react";
import { ProductCont } from "../../contextAPI";

export default function CartTotals(props) {
   const {storeProducts, detailProduct, productS,DecreaseProduct_count, ClearCart, IncreaseProduct_count, closeModal, addCart,  subTotal,  handleClick} = useContext(ProductCont)
return(
    <div className="Total_page">
      <div className="Total">
        <button className="Total_button" onClick={()=> ClearCart()}> Clear Cart</button>       
        <p> SubTotal: ${subTotal.Total} </p>
        <p>cartTax : ${subTotal.tax}</p>
        <p>cartTotal : ${subTotal.Sum_Total}</p>
        </div>
   </div>
   
   )}  