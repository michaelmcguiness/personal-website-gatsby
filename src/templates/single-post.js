import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Badge } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const SinglePost = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <ul className="post-tags">
        {post.tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Badge color="primary">{tag}</Badge>
            </Link>
          </li>
        ))}
      </ul>
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