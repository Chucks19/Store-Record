import  { createContext, useState } from 'react';
import {storeProducts} from './data';
import {detailProduct} from './data';

export const ProductCont = createContext("");
export function Provider({children}){       
       const [productS, setProductS] = useState(detailProduct)
       const [cart, setCart] = useState([]);
       const [subTotal, setSubTotal] = useState({Total: 5, tax: 1, Sum_Total: 15});



       function handleClick(id){
               setProductS(det_pro=> {
       const newP = storeProducts.find((item)=>item.id === id)
              return( newP
                                   )
              }
       )}     
 function Remove(id){
       const index = cart.indexOf(cart.find((item)=>item.id === id))
       const tempcart = cart    
       const Remove_item = cart[index] 
       Remove_item.count = 0;
       Remove_item.inCart = false;
       if (index > -1){
       cart.splice(index, 1)
       }
       setCart(prev => (cart));    
       
       SetTotal_page();
              }

  
function addCart(id){

              const newP = storeProducts.find((item)=>item.id === id)
              newP.inCart = true;
              newP.mode = true; 
              newP.count = 1;
              newP.total= newP.count * newP.price
                         
              setCart((prev) => {
              
              let newCa = prev;
              if (!newCa.includes(newP)){
              newCa.push(newP)}
              SetTotal_page();
              return newCa
       });
       
             
       setProductS(det_pro=> {
                      return({newP})});
                      
       SetTotal_page(); 
       }

function ClearCart(){
              setCart(det_pro=> ([]));
                    SetTotal_page(); 
} 
       
function closeModal(id){
       const newP = storeProducts.find((item)=>item.id === id)
      newP.mode = false; 
       setProductS(det_pro=> {
       return({newP})
                    }
 )}

 function IncreaseProduct_count(id){
        setCart(det_pro=> {

             let newCart = cart.map(prev => {
             if (prev.id === id){prev.count = prev.count + 1
             prev.inCart=true}
              prev.total= prev.count * prev.price


              return prev
           })
               SetTotal_page();

              return(newCart)
        })
              SetTotal_page(); 

       }

function DecreaseProduct_count(id){
       setCart(det_pro=> {
       let newCart = cart.map(prev => {
              if (prev.id === id & prev.count > 0){
              if (prev.count === 1){prev.inCart = false}
               prev.count = prev.count - 1
              }   
              prev.total= prev.count * prev.price
   
             return prev
          })
                               SetTotal_page();

             return(newCart)
         

       })  
                   SetTotal_page(); 

}

      function SetTotal_page() {
              let Total = 0;
              cart.map(prev=>(Total = prev.total + Total))
              const Temptax = 0.1 * Total;
              const tax = parseFloat(Temptax.toFixed(2));
              const Sum_Total = Total + tax;
              setSubTotal(() =>{
              return{Total: Total, tax: tax, Sum_Total: Sum_Total}
      })
       };

         return(
              <ProductCont.Provider value={{storeProducts, detailProduct, productS,DecreaseProduct_count, IncreaseProduct_count, closeModal, ClearCart, addCart, Remove, cart, subTotal,  handleClick}}> {children}
              </ProductCont.Provider>
               )
       }
