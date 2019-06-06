import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import richard from "../images/richard24.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      display: `flex`,
      alignItems: `stretch`,
      justifyContent: `center`,
      flexWrap: `wrap`
    }}>

    <Link style={{padding: `0 2rem 0`}} to="/RSVP/"><h1>RSVP</h1></Link>
    <Link style={{padding: `0 2rem 0`}} to="/Story/"><h1>Story</h1></Link>
    <Link style={{padding: `0 2rem 0`}} to="/Registry/"><h1>Registry</h1></Link>
    <img src={richard} height="500px" Alt="Luke and Lauren"/>
    </div>
  </Layout>
)

export default IndexPage
