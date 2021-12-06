import React from "react"
import { Link } from "gatsby"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

import { menuItems } from "../../data/menuItems.js";

import "./nav-menu.styles.scss"

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(false);

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
          <Button className="option" color="inherit" onClick={e => handleClick(index, e)}>
            {item} <i/>
          </Button>
          <Menu
            anchorEl={anchorEl && anchorEl[index]}
            keepMounted
            open={anchorEl && (anchorEl[index])}
            onClose={handleClose}
            getcontentanchorel={null}
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
