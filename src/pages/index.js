import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Richard24 from "../components/richard24"

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
    </div>

    <div style={{textAlign: `center`}}>
      <h2>Lauren Nicole Eckhardt and Luke Elijah Harris</h2>
      <p>are leaping into love on the 29th of February 2020</p>
    </div>

    <div>
        <Richard24 />
    </div>
  </Layout>
)

export default IndexPage
