import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Story = () => (
  <Layout>
    <SEO title="Story" />
    <h1 style={{textAlign: `center`}}>The Story So Far</h1>
    <div>
      <h1>The First Meeting</h1>
      <h2>May 25, 2016</h2>
      <p>Luke met Lauren at a bar, promptly forgot her name, and then came up with every name in the book.</p>
      <p style={{fontStyle: `italic`}}>Lauren (now Edward) left.</p>
      <h1>The Pursuit Begins</h1>
      <h2>July 8, 2016</h2>
      <p>Luke meets Lauren again at a group bible study, which Luke engineered to happen.</p>
      <p style={{fontStyle: `italic`}}>This time, Lauren is known as Richard.</p>
      <h2>August 2016</h2>
      <p>Luke adds Lauren on Facebook and sends long rambles about pineapple science, in which Richard</p>
    </div>
  </Layout>
)

export default Story