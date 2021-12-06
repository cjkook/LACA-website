import React from "react"
import { Link } from "gatsby"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

import { menuItems } from "./menuItems.js";

import "./nav-menu.styles.scss"

console.log(menuItems)
const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {Object.keys(menuItems).map((item, index) => (
        
        <div key={index}>
        {/* <Button
            className="option"
            color="inherit"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          > */}
          <Button className="option" color="inherit" onClick={e => handleClick(index, e)}>
            {item} <i/>
          </Button>
          <Menu
            anchorEl={anchorEl && anchorEl[index]}
            keepMounted
            open={anchorEl && Boolean(anchorEl[index])}
            onClose={handleClose}
            getContentAnchorEl={null}
          >
            {menuItems[item].map((menuitems, menuindex) => (
              <MenuItem
                key={menuindex}
                selected={menuitems === item}
                onClick={handleClose}
              >
                <Link to={menuitems.path}>{menuitems.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      ))}
    </>
  )
}

export default NavMenu
