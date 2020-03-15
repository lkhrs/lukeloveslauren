import React from "react"
import { Link } from "gatsby"

export Nav () => (
<div style={{
      display: `flex`,
      alignItems: `stretch`,
      justifyContent: `center`,
      flexWrap: `wrap`
    }}>
    <Link style={{padding: `0 2rem 0`}} to="/Story/"><h1>Story</h1></Link>
    <Link style={{padding: `0 2rem 0`}} to="/Registry/"><h1>Registry</h1></Link>
</div>
)