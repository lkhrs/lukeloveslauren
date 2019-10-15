/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Link } from "gatsby"
import cactus from "../images/cactus.png"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
          <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <div style={{
      display: `flex`,
      alignItems: `stretch`,
      justifyContent: `center`,
      flexWrap: `wrap`
    }}>

    <Link style={{padding: `0 2rem 0`}} to="/Story/"><h1>Story</h1></Link>
    <Link style={{padding: `0 2rem 0`}} to="/RSVP/"><h1>RSVP</h1></Link>
    <Link style={{padding: `0 2rem 0`}} to="/Registry/"><h1>Registry</h1></Link>
            </div>
          <main>
          {children}
          </main>
          <footer>
            <div style={{textAlign: `center`, marginTop: `5rem`, opacity: `0.20`}}>
              <a href="https://luke.work" target="_blank" title="website by luke"><img style={{maxWidth: `42px`}} src={cactus} /></a>
            </div>
          </footer>
        </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
