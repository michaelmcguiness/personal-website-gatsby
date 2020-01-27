import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const notesPage = ({ pageContext }) => {
  const { authors, tags, tagPostCounts, authorPostCounts } = pageContext
  const headingStyle = { margin: "40px 0" }

  return (
    <Layout pageTitle="Notes">
      <SEO title="All Notes" keywords={["books", "notes", "topics"]} />
      <h2 style={headingStyle}>Tags:</h2>
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag}{" "}
              <Badge style={{ marginLeft: "5px" }} color="light">
                {tagPostCounts[tag]}
              </Badge>
            </Button>
          </li>
        ))}
      </ul>
      <h2 style={headingStyle}>Sources: </h2>
      <ul>
        {authors.map(author => (
          <li key={author} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/author/${slugify(author)}`}>
              {author}{" "}
              <Badge style={{ marginLeft: "5px" }} color="light">
                {authorPostCounts[author]}
              </Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default notesPage
