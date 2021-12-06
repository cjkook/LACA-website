import React from "react"
import { Link } from "gatsby"
import NavMenu from "../nav-menu/nav-menu.component"

import "./nav-bar.styles.scss"
// ? Use logo
// ? import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const NavBar = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link to="/">{/* <Logo className="logo" /> */}</Link>
          <h1 className="brand-title">Latin American Cultural Association</h1>
        </div>

        <div className="options">
          <NavMenu/>
        </div>
      </div>
    </>
  )
}

export default NavBar
