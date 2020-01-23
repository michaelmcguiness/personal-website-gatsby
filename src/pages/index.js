import React from "react"
import Layout from "../components/layout"
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
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.frontmatter.path}
                title={node.frontmatter.title}
                sources={node.frontmatter.sources}
                path={node.frontmatter.path}
                body={node.excerpt}
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
            path
            sources {
              title
              authors
              link
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
