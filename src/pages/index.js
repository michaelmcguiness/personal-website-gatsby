import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <StaticQuery
      query={IndexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <Post
                key={index}
                frontmatter={node.frontmatter}
                body={node.excerpt}
                slug={node.fields.slug}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            sources {
              title
              authors
              link
            }
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
