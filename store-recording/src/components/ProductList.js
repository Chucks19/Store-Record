import React from "react";
import {ProductCont} from "../contextAPI";
import {useContext} from "react"

export default function ProductList () {
const {storeProducts /*detailProduct*/} = useContext(ProductCont);
//  console.log({store})
const { id, title, img, price, company, info, inCart, count, total} = {storeProducts}

    return (
      <div>
          <p className="Product_tit1"> OUR <span className="Product_tit2">PRODUCTS</span></p>
        {storeProducts.map(product =>  (
          <div  
           key = {product.id}> 
          This is the price in ${product.price}   </div>
          ))
          } </div>)
          
}      


