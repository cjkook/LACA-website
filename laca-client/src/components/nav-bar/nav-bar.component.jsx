import React from "react";
import { Link } from "gatsby"

import "./nav-bar.styles.scss";
// ? Use logo
// ? import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const NavBar = ({currentUser}) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        {/* <Logo className="logo" /> */}
      </Link>
      <h1 className="brandTitle">cjko-emporium</h1>
      
    </div>

    <div className="options">
      <Link className="option" to="/shop">
        shop
      </Link>
      <Link className="option" to="/contact">
        contact
      </Link>
      <Link className="option" to="/cart"> 
        cart
      </Link>
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
