import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { homePageQuery } from "../__generated__/gatsby-types"
import HeroSearch from "../components/heroSearch"

type Props = {
  data: homePageQuery
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <SEO title="Home" />
    <HeroSearch />
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
