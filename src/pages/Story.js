import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Story = (props) => (
  <Layout>
    <SEO title="Story" />
    <h1 style={{textAlign: `center`}}>The Story So Far</h1>
    <div>
      <h1>The First Meeting</h1>
      <h2>May 26, 2016</h2>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} style={{maxWidth: 500}} />
      <p>It was a Thursday. Luke met Lauren at a bar, promptly forgot her name, and then came up with every name in the book, which Lauren played along with.</p>
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
      <p style={{fontStyle: `italic`}}>Dan the Man shows up with a plan.</p>
      <h1>Second Date</h1>
      <h2 style={{fontStyle:`italic`, fontWeight: `normal`}}>It's Official</h2>
      <h2>November 19, 2016</h2>
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} style={{maxWidth: 500}} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} style={{maxWidth: 500}} />
      <p>A Grouplove concert and a Sims headband somehow convinces Lauren that Luke is her boyfriend. Clearly a recipe for success.</p>

    </div>
  </Layout>
)

export default Story

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "two.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "three.jpg" }) {
      ...fluidImage
    }
  }
`