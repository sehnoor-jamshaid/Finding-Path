import React,{useState} from "react";
import { ReactDOM } from "react";
import Logo from "../../images/Logo.png"
import { Link } from "react-router-dom";
const Header = () => {
 const [headerStatus, setHeaderStatus] = useState("Login")
 const clickonLogin=()=>
 {
  setHeaderStatus(headerStatus=="Login"?"Logout":"Login")
 }
    return (
      <div className="header_container">
        <div className="logo_container">
          <img src={Logo} alt="logo" className="image_logo" />
        </div>
        <div className="menu_items_cont">
          <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about-us">About Us</Link>
            </li>
            <li>
               <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
               <Link to="/">Careers</Link>
            </li>
          <button className="top_rated" onClick={clickonLogin}>{headerStatus}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;