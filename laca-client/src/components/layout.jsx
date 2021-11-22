/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createTheme, ThemeProvider, styled } from "@mui/material/styles"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NavBar from "./nav-bar/nav-bar.component"

import "./layout.scss"

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#C8553D",
    },
    secondary: {
      main: "#588B8B",
    },
    background: {
      default: "#F5F5F5",
    },
    success: {
      main: "#4caf50",
    },
    text: {
      primary: "#4c5760",
      secondary: "#4c5760",
    },
    divider: "#4c5760",
  },
  typography: {
    fontFamily: "Montserrat",
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Latin American Cultural Association
            </Typography>
            <Button
              color="inherit"
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Services
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <NavBar title={data.title}></NavBar>
      {/* <Grid container spacing={3}>
        <Grid item xs="auto">
          <h1>{data.site.siteMetadata?.title || `El Buen Amigo`}</h1>
        </Grid>
        <Grid item xs="auto">
          <h2>news</h2>
        </Grid>
        <Grid item xs="auto">
          <h2>news</h2>
        </Grid>
        <Grid item xs="auto">
          <h2>news</h2>
        </Grid>
      </Grid> */}

      <div
        style={{
          margin: `0`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}
          {` `}
          <p>cjko-ok</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
