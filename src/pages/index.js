import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Richard24 from "../components/richard24"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
