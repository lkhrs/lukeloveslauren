import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/RSVP/"><h1>RSVP</h1></Link>
    <Link to="/Story/"><h1>Story</h1></Link>
    <Link to="/Registry/"><h1>Registry</h1></Link>
  </Layout>
)

export default IndexPage
