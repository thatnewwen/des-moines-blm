import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Action = () => (
  <Layout>
    <SEO title="Action" />
    <h1>Take action</h1>
    <h2>City of Des Moines</h2>
    <h3>Defund the Des Moines Police Department</h3>
    <p>
      Sign the petition:{" "}
      <a href="http://change.org/defundDMPD">change.org/defundDMPD</a>
    </p>
    <p>
      Email DSM City Council:{" "}
      <a href="http://defund12.org/desmoines">defund12.org/desmoines</a>
    </p>
    <h3>Des Moines Public Schools</h3>
    <h2>Polk County</h2>
    <h2>State of Iowa</h2>
    <h3>
      Executive Order to restore voting rights to Iowans with felony convictions
    </h3>
    <p>
      Email Governor Reynolds about executive order:{" "}
      <a href="http://tinyurl.com/reynoldsemail">tinyurl.com/reynoldsemail</a>
    </p>
    <p>
      Email state reps about executive order:{" "}
      <a href="http://tinyurl.com/iowarepsletter">tinyurl.com/iowarepsletter</a>
    </p>
  </Layout>
)

export default Action
