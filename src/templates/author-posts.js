import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import { graphql } from "gatsby"
import authors from "../util/authors"
import Img from "gatsby-image"

const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const author = authors.find(x => x.name === pageContext.authorName)
  const pageHeader = `${totalCount} note${
    totalCount === 1 ? "" : "s"
  } derived from ${pageContext.authorName}'s work`
  console.log(data.file)

  return (
    <Layout>
      <h1>{author.name}</h1>
      <Img className="author-image" fluid={data.file.childImageSharp.fluid} />
      <p style={{ marginBottom: "30px" }}>{author.bio}</p>
      <h3 style={{ textAlign: "center", margin: "20px" }}>{pageHeader}</h3>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <Post
          key={index}
          frontmatter={node.frontmatter}
          body={node.excerpt}
          slug={node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          sources: { elemMatch: { authors: { in: [$authorName] } } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
            title
            sources {
              authors
              link
              title
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default authorPosts
