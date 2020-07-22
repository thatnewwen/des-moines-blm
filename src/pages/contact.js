import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact-form"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact</h1>
    <ContactForm/>
  </Layout>
)

export default Contact
