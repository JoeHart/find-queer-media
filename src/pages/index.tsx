import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { homePageQuery } from "../__generated__/gatsby-types"
type Props = {
  data: homePageQuery
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Find Queer Media</h1>
    <p>Welcome to the index of queer media.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allMedia.edges.map(edge => {
        return (
          <li>
            <Link to={edge.node.fields.slug}>{edge.node.title}</Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)
export const pageQuery = graphql`
  query homePage {
    allMedia {
      edges {
        node {
          id
          title
          tags {
            id
            label
            isSpoiler
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default IndexPage
