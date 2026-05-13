import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
   const [menu,  setMenu] = useState('contact')
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu('home')} className={menu=== 'home' ?'active':''}>home</li>
        <li onClick={()=> setMenu ('menu')} className={menu=== 'menu' ?'active':''}>menu</li>
        <li onClick={()=> setMenu ('contact')} className={menu=== 'contact' ?'active':''}>contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
          <img src={assets.basket_icon } alt="" />
          <div className="dot"></div>
        </div>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
