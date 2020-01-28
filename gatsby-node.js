const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const authors = require("./src/util/authors")
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)

    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singlePost: path.resolve("src/templates/single-post.js"),
    notesPage: path.resolve("src/templates/notes-page.js"),
    tagPosts: path.resolve("src/templates/tag-posts.js"),
    authorPosts: path.resolve("src/templates/author-posts.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
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
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePost,
        context: {
          // passing slug for template to use to get post
          slug: node.fields.slug,
        },
      })
    })

    // get all tags and authors
    let tags = []
    let authors = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
        edge.node.frontmatter.sources.forEach(source => {
          authors = authors.concat(source.authors)
        })
      }
    })

    // ['startups', 'business', ...]
    // { startups: 5, business: 12, ...}
    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    let authorPostCounts = {}
    authors.forEach(author => {
      authorPostCounts[author] = (authorPostCounts[author] || 0) + 1
    })

    tags = _.uniq(tags)
    authors = _.uniq(authors)

    tags.sort()
    authors.sort()

    // create notes page
    createPage({
      path: `/notes`,
      component: templates.notesPage,
      context: {
        authors,
        tags,
        authorPostCounts,
        tagPostCounts,
      },
    })

    // create tag posts pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      })
    })

    // create author pages
    authors.forEach(author => {
      console.log(slugify(author))
      createPage({
        path: `/author/${slugify(author)}`,
        component: templates.authorPosts,
        context: {
          authorName: author,
          imageUrl: `${slugify(author)}.png`,
        },
      })
    })
  })
}
