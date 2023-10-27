import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    console.log(this)
    return (
      <nav className="Navi">
      <div className="Home"> <Link to ="/"> <span className="brand">ECO</span>  <i className="fas fa-home"></i> </Link> </div> 
      <form>
      <div className="search-pdt">
        <input type="text" placeholder="Type product name" className="search" />
        <i class="fas fa-search"></i>
        </div>
        <button className="btn">Search</button>
      </form><ul className="nav_List">
        <li className="Nav_Li"> <Link to ="/">Product</Link> </li>
      </ul>
      <div className="Cart_Button"> <Link to ="/Cart" className="butt"> 
      <i className="fas fa-cart-plus"></i> Cart </Link> </div>
       </nav>
   )
   }
  }