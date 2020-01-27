import React from "react"
import { Twitter, LinkedIn, GitHub, Email } from "@material-ui/icons"
import Link from "@material-ui/core/Link"

const Footer = () => {
  const footerStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20rem",
    alignItems: "center",
    width: "100%",
  }

  return (
    <footer style={footerStyles}>
      Michael McGuiness © {new Date().getFullYear()}
      <div
        style={{
          maxWidth: "400px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link
          target="_blank"
          href="https://twitter.com/m_mcguin"
          rel="noopener noreferrer"
          color="inherit"
          style={{ margin: "0.2rem" }}
        >
          <Twitter />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mmcguiness/"
          rel="noopener noreferrer"
          color="inherit"
          style={{ margin: "0.2rem" }}
        >
          <LinkedIn />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/michaelmcguiness"
          rel="noopener noreferrer"
          color="inherit"
          style={{ margin: "0.2rem" }}
        >
          <GitHub />
        </Link>
        <Link
          href="mailto: michaelmcguiness2@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          style={{ margin: "0.2rem" }}
        >
          <Email />
        </Link>{" "}
      </div>
    </footer>
  )
}

export default Footer
