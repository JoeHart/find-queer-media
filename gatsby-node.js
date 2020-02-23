/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type BooksJson implements Node {
        tags: [TagsJson]! @link(by: "slug")
    }`,
    `type MoviesJson implements Node {
        tags: [TagsJson]! @link(by: "slug")
    }`,
    `type TagsJson implements Node {
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
  }
  createResolvers(resolvers)
}
