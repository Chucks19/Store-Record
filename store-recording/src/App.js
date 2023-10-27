import React from "react";
import {Route, Routes, Navigate } from "react-router-dom"
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import "./App.css";
import Modal from "./components/Modal";
import Default from "./components/Default";

function App() {
      return (
 
    <div>
      <Navbar />
                <Routes>

          <Route exact path="/" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Details" element={<Details />} />
          <Route  path= "*" element = {<Default />}/>

                  </Routes>
    <Modal/>
     </div>

     
    )
  }


export default App;
