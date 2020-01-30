import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const notesPage = ({ pageContext }) => {
  const { authors, tags, tagPostCounts, authorPostCounts } = pageContext
  const headingStyle = { margin: "20px 0" }

  return (
    <Layout pageTitle="Notes">
      <SEO title="All Notes" keywords={["books", "notes", "topics"]} />
      <h2 style={headingStyle}>Tags:</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tags.map(tag => (
          <Button
            key={tag}
            style={{ margin: "5px" }}
            color="primary"
            href={`/tag/${slugify(tag)}`}
          >
            {tag}{" "}
            <Badge style={{ marginLeft: "5px" }} color="light">
              {tagPostCounts[tag]}
            </Badge>
          </Button>
        ))}
      </div>
      <h2 style={headingStyle}>Sources: </h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {authors.map(author => (
          <Button
            key={author}
            style={{ margin: "5px" }}
            color="primary"
            href={`/author/${slugify(author)}`}
          >
            {author}{" "}
            <Badge style={{ marginLeft: "5px" }} color="light">
              {authorPostCounts[author]}
            </Badge>
          </Button>
        ))}
      </div>
    </Layout>
  )
}

export default notesPage
