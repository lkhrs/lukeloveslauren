import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RSVP = () => (
  <Layout>
    <SEO title="Registry" />
    <h1 style={{textAlign: `center`}}>The Registry</h1>
      <p>Hello friends and family,</p>
      <p>We are honored you will share in our special day. Your presence is our gift!</p>
      <p>We're lucky to already have a home full of everything we need, so please enjoy browsing this wish list, where you can contribute to our dream honeymoon and our life together.</p>
      <p>Thanks for visiting and we can't wait to see you on our big day!</p>
    <div style={{textAlign: `center`}}>
    <a href="https://www.honeyfund.com/wedding/LukeLovesLauren#r" target="_blank"><h1>Contribute to our Honeymoon Fund</h1></a>
    <a href="https://www.amazon.com/wedding/share/LukeLovesLauren" target="_blank"><h1>View our Amazon Registry</h1></a>
    </div>
  </Layout>
)

export default RSVP