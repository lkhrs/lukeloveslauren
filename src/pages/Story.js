import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Story = () => (
  <Layout>
    <SEO title="Story" />
    <h1 style={{textAlign: `center`}}>The Story So Far</h1>
    <div>
      <h1>The First Meeting</h1>
      <i>insert pic here</i>
      <h2>May 25, 2016</h2>
      <p>Luke met Lauren at a bar, promptly forgot her name, and then came up with every name in the book.</p>
      <p style={{fontStyle: `italic`}}>Lauren (now Edward) left.</p>
      <h1>The Pursuit Begins</h1>
      <h2>July 8, 2016</h2>
      <p>Luke meets Lauren again at a group bible study, which Luke engineered to happen.</p>
      <p style={{fontStyle: `italic`}}>This time, Lauren is known as Richard.</p>
      <h2>August 2016</h2>
      <p>Luke adds Lauren on Facebook.</p>
      <h2>September 14, 2016</h2>
      <p>Luke invites Lauren to a french fry party on a Friday, known as <b>Fryday</b>, and reveals his aspirations to become a Pineapple Biologist (PhD).</p>
      <h1>First Date</h1>
      <h2>October 18, 2016</h2>
      <p>Lauren and Luke go see Mr. Gnome after some bad Mexican food.</p>
      <p style={{fontStyle: `italic`}}>Dan the Man enters the picture, with a plan.</p>
    </div>
  </Layout>
)

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export default Story