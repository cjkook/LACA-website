/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createTheme, ThemeProvider } from "@mui/material/styles"

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
    fontFamily: 'Droid Serif',
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

  return (
    <ThemeProvider theme={theme}>
      <NavBar title={data.title}></NavBar>

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
