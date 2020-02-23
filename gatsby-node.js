/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type Character {
      type: String!
      sexuality: String,
      isSpoiler: Boolean!
      gender: String
      isOut: Boolean
    }
    interface Media @nodeInterface {
      id: ID!
      title: String
      tags: [TagsJson]!
      characters: [Character!]
    }
    type Book implements Node & Media{
        tags: [TagsJson]! @link(by: "id")
        characters: [Character!]
    }
    type Movie implements Node & Media {
        tags: [TagsJson]! @link(by: "id")
        characters: [Character!]
    }
    type TagsJson implements Node {
        id: ID!
        isSpoiler: Boolean!
    }`,
  ]
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    TagsJson: {
      isSpoiler: {
        type: "Boolean!",
        resolve(source, args, context, info) {
          return !!source.isSpoiler
        },
      },
    },
    Query: {
      allMedia: {
        type: ["Media"],
        resolve(source, args, context, info) {
          return context.nodeModel.getAllNodes({ type: "Media" })
        },
      },
    },
  }
  createResolvers(resolvers)
}

const createBooks = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allBook {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allBook.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/book.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
const createMovies = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMovie {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMovie.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/movie.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

exports.createPages = async context => {
  await createBooks(context)
  await createMovies(context)
}

function getBasePath(path) {
  switch (path) {
    case "Movie":
      return "movies"
    case "Book":
      return "books"
    default:
      return "media"
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Book` || node.internal.type === `Movie`) {
    const fileNode = getNode(node.parent)
    const slug = createFilePath({
      node,
      getNode,
      basePath: getBasePath(node.internal.type),
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
