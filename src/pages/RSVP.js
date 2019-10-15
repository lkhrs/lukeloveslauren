import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RSVP = () => (
  <Layout>
    <SEO title="RSVP" />
      <h1 style={{textAlign: `center`}}>RSVP to the thing</h1>
      <h2 style={{textAlign: `center`}}><a href="http://embassysuites.hilton.com/en/es/groups/personalized/A/AUSCLES-EHW-20200228/index.jhtml" target="_blank" class="underline">Click here for hotel information</a></h2>
      <div style={{display: `flex`, justifyContent: `center`}}>
      <iframe title="RSVP Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdx0Wf5teV_JxtPt_qpfVlaTghNQ_gUxsNIlKGjb-wOdYJkGg/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
  </Layout>
)

export default RSVP
