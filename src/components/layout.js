import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Twitter, LinkedIn, GitHub, Email } from "@material-ui/icons"
import Link from "@material-ui/core/Link"

import Header from "./header"
import "../styles/index.scss"

const footerStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20rem",
  alignItems: "center",
  width: "100%",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={footerStyles}>
          Michael McGuiness © {new Date().getFullYear()}
          <div style={{ maxWidth: "400px" }}>
            <Link
              target="_blank"
              href="https://twitter.com/m_mcguin"
              rel="noopener noreferrer"
              color="inherit"
              style={{ margin: "1rem" }}
            >
              <Twitter />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mmcguiness/"
              rel="noopener noreferrer"
              color="inherit"
              style={{ margin: "1rem" }}
            >
              <LinkedIn />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/michaelmcguiness"
              rel="noopener noreferrer"
              color="inherit"
              style={{ margin: "1rem" }}
            >
              <GitHub />
            </Link>
            <Link
              href="mailto: michaelmcguiness2@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              style={{ margin: "1rem" }}
            >
              <Email />
            </Link>{" "}
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
