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
          "src/__generated__/gatsby-schema.graphql": true,
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
        name: `find-queer-media`,
        short_name: `queer`,
        start_url: `/`,
        icon: `src/images/rainbow.png`, // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
  ],
}
