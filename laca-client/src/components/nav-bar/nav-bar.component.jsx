import React from "react";
import { Link } from "react-router-dom";

import "./nav-bar.styles.scss";
// ? Use logo
// ? import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const NavBar = ({currentUser}) => (
  <div className="header">
    <div className="logo-container">
      <a to="/">
        {/* <Logo className="logo" /> */}
      </a>
      <h1 className="brandTitle">cjko-emporium</h1>
      
    </div>

    <div className="options">
      <a className="option" to="/shop">
        shop
      </a>
      <a className="option" to="/contact">
        contact
      </a>
      <a className="option" to="/cart"> 
        cart
      </a>
      {/* {currentUser ? 
      <div className="option" onClick={() => auth.signOut()}>sign out</div>
      :
      <Link className="option" to="/login">
        login
      </Link>
      } */}
      
    </div>
  </div>
);

export default NavBar;
