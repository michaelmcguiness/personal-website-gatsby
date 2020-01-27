import React from "react"
import Layout from "../components/layout/layout"
import Source from "../components/Source"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Badge } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <br />
      <br />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}>
        {post.tags.map((tag, index) => (
          <Link key={index} to={`/tag/${slugify(tag)}`}>
            <Badge style={{ margin: "2px" }} color="primary">
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
      <h2>Sources: </h2>
      {post.sources.map((source, index) => (
        <Source key={index} source={source} />
      ))}
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        sources {
          title
          authors
          link
        }
        tags
      }
    }
  }
`

export default SinglePost
