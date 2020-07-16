import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Action = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Take action</h1>
    <h2>City of Des Moines</h2>
    <h3>Defund the Des Moines Police Department</h3>
    <p>Sign the petition: change.org/defundDMPD</p>
    <p>Email DSM City Council: defund12.org/desmoines</p>
    <h3>Des Moines Public Schools</h3>
    <h2>Polk County</h2>
    <h2>State of Iowa</h2>
    <h3>
      Executive Order to restore voting rights to Iowans with felony convictions
    </h3>
    <p>
      Email Governor Reynolds about executive order: tinyurl.com/reynoldsemail
    </p>
    <p>Email state reps about executive order: tinyurl.com/iowarepsletter</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Action
