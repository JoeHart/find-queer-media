require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Find Queer Media`,
    description: `The curated home of Queer media, find your next LGBTQ+ store here.`,
    author: `@joehart`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-transformer-movie",
      options: {
        apiKey: process.env.OMDB_API_KEY,
      },
    },
    {
      resolve: "gatsby-transformer-book",
      options: {
        key: process.env.GOOGLE_BOOKS_API_KEY,
      },
    },
  ],
}
