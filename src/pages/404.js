import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Something went wrong...">
    <SEO title="404: Not found" />
    <br />
    <br />
    <h1>This page doesn't exist</h1>
    <br />
    <br />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link className="btn btn-primary text-uppercase" to={"/"}>
        Go home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
