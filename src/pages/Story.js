import React from "react"
import { graphql, Link } from "gatsby"
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
      <p>It was a Thursday, at a mutual friend's 21st. Luke met Lauren at a bar, promptly forgot her name, and then came up with every name in the book, which Lauren played along with.</p>
      <p style={{fontStyle: `italic`}}>Lauren (now Edward) left.</p>
      <h1>The Pursuit Begins</h1>
      <p>Shortly after the bar incident, Luke realized he had met someone special. It seemed as though they were in sync, complimenting each other's weirdness and personality. </p> 
      <p>Luke knew he needed to lock things down before she graduated in December 2016.</p>
      <h2>July 8, 2016</h2>
      <p>Luke meets Lauren again at a group bible study, which Luke engineered to happen.</p>
      <p style={{fontStyle: `italic`}}>This time, Lauren is known as Richard.</p>
      <h2>August - September 2016</h2>
      <p>Luke added Lauren on Facebook and made every attempt to talk with her at church groups.</p>
      <h2>September 14, 2016</h2>
      <p>Luke invites Lauren to a french fry party on a Friday, known as <b>Fryday</b>, and reveals his aspirations to become a Pineapple Biologist (PhD).</p>
      <h1>First Date</h1>
      <h2>October 18, 2016</h2>
      <p>Lauren and Luke go see Mr. Gnome after some bad Mexican food.</p>
      <p style={{fontStyle: `italic`}}>Dan the Man shows up with a plan.</p>
      <h2>November 17, 2016</h2>
      <p>Lauren drags Luke down to Corpus Christi to meet her parents.</p>
      <h1>Second Date</h1>
      <h2 style={{fontStyle:`italic`, fontWeight: `normal`}}>It's Official</h2>
      <h2>November 19, 2016</h2>
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} style={{maxWidth: 500}} />
      <p>A Grouplove concert and a Sims headband somehow convinces Lauren that Luke is her boyfriend. Clearly a recipe for success.</p>
      <h2>Two Days Later...</h2>
      <p>Our indie band album cover was created.</p>
      <Img fluid={props.data.imageFour.childImageSharp.fluid} style={{maxWidth: 500}} />
      <h1>The Rest Of The Story (Including Rompers)</h1>
      <h2>April 2017</h2>
      <p>Sherwood Forest Faire</p>
      <Img fluid={props.data.sherwood.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <h2>April 28-May 30 2017</h2>
      <p>A trip to Kansas City MO for Planet Comicon.</p>
      <p><i>This is where Vanellope the minivan came into the picture.</i></p>
      <Img fluid={props.data.kcmo.childImageSharp.fluid} style={{maxWidth: 500}} />
      <Img fluid={props.data.kcmo2.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <h2>October 2017</h2>
      <p>ACL 2017</p>
      <Img fluid={props.data.acl.childImageSharp.fluid} style={{maxWidth: 500}} />
      <h2>November 26, 2017</h2>
      <p>A cliche Austin picture.</p>
      <Img fluid={props.data.cliche.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <h2>December 2017</h2>
      <Img fluid={props.data.jones.childImageSharp.fluid} style={{maxWidth: 500}} />
      <h2>May 2018</h2>
      <p>Rompin' around San Fran.</p>
      <Img fluid={props.data.sanfran1.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <Img fluid={props.data.sanfran3.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <p>putt putt champions at Urban Putt</p>
      <Img fluid={props.data.puttputt.childImageSharp.fluid} style={{maxWidth: 500}} />
      <p>Muir Woods National Redwood Forest</p>
      <Img fluid={props.data.redwood.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <Img fluid={props.data.sanfran2.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <h2>November 12, 2018</h2>
      <Img fluid={props.data.capitol.childImageSharp.fluid} style={{maxWidth: 500}} />
      <h2>2019</h2>
      <p>Peter Pan Minigolf</p>
      <p><i>rawr</i></p>
      <Img fluid={props.data.peterpan.childImageSharp.fluid} style={{maxWidth: 500}} />
      <p>Davis Mountains State Park</p>
      <Img fluid={props.data.fortdavis.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <h1>The Proposal</h1>
      <h2>May 19, 2019</h2>
      <p>Zilker Botanical Japanese Tea Garden. With lots of bamboo obscuring the Austin skyline.</p>
      <Img fluid={props.data.richard24.childImageSharp.fluid} style={{maxWidth: 1000}} />
      <h1>The Marriage</h1>
      <h2>February 29, 2020</h2>
    </div>
  </Layout>
)

export default Story

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_withWebp_noBase64
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
    imageFour: file(relativePath: { eq: "four.jpg" }) {
      ...fluidImage
    }
    kcmo: file(relativePath: { eq: "kcmo.jpg" }) {
      ...fluidImage
    }
    kcmo2: file(relativePath: { eq: "kcmo2.jpg" }) {
      ...fluidImage
    }
    cliche: file(relativePath: { eq: "cliche.jpg" }) {
      ...fluidImage
    }
    sanfran1: file(relativePath: { eq: "sanfran1.jpg" }) {
      ...fluidImage
    }
    sanfran2: file(relativePath: { eq: "sanfran2.jpg" }) {
      ...fluidImage
    }
    sanfran3: file(relativePath: { eq: "sanfran3.jpg" }) {
      ...fluidImage
    }
    redwood: file(relativePath: { eq: "redwood.jpg" }) {
      ...fluidImage
    }
    peterpan: file(relativePath: { eq: "peterpan.jpg" }) {
      ...fluidImage
    }
    fortdavis: file(relativePath: { eq: "fortdavis.jpg" }) {
      ...fluidImage
    }
    richard24: file(relativePath: { eq: "richard24.jpg" }) {
      ...fluidImage
    }
    sherwood: file(relativePath: { eq: "sherwood.jpg" }) {
      ...fluidImage
    }
    puttputt: file(relativePath: { eq: "puttputt.jpg" }) {
      ...fluidImage
    }
    acl: file(relativePath: { eq: "acl.png" }) {
      ...fluidImage
    }
    capitol: file(relativePath: { eq: "capital.jpg" }) {
      ...fluidImage
    }
    jones: file(relativePath: { eq: "jones.jpg" }) {
      ...fluidImage
    }
  }
`