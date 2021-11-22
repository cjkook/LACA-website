import React from "react"
import { Link } from "gatsby"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

import "./nav-bar.styles.scss"
// ? Use logo
// ? import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const NavBar = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link to="/">{/* <Logo className="logo" /> */}</Link>
          <h1 className="brandTitle">Latin American Cultural Association</h1>
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
          <Button
            className="option"
            color="inherit"
            id="about-button"
            aria-controls="about-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Our Story
          </Button>
          <Menu
            id="about-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "about-button",
            }}
          >
            <MenuItem onClick={handleClose} to="/elbuenamigo">
              <Link to="/test">El Buen Amigo</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Santiago</MenuItem>
            <MenuItem onClick={handleClose}>Our Story</MenuItem>
          </Menu>
          <Button
            className="option"
            color="inherit"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Services
          </Button>
          <Button
            className="option"
            color="inherit"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Services
          </Button>
          {/* {currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>sign out</div>
        :
        <Link className="option" to="/login">
          login
        </Link>
        } */}
        </div>
      </div>
    </>
  )
}

export default NavBar
