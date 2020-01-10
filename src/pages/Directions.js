import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';

const Directions = () => (
  <Layout>
    <SEO title="Directions" />
    <h1 style={{ textAlign: `center` }}>Directions to the thing</h1>
    <p>
      The address to the parking garage is 2401 Longview St. 78705. Your code to
      enter into the garage will be 8988.
    </p>
    <p>
      The entrance to the garage is from the alley between Longview St. and Leon
      St.
    </p>
  </Layout>
);

export default Directions;
