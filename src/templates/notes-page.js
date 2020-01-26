import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const notesPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  console.log(pageContext)
  return (
    <Layout pageTitle="Notes">
      <SEO title="All Notes" keywords={["books", "notes", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default notesPage
