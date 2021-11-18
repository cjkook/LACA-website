/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./nav-bar/nav-bar.component"

import "./layout.scss"

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
    <>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
