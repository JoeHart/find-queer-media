import React from "react"
import { graphql } from "gatsby"
// @ts-ignore
import Layout from "../components/layout"
import { movieQuery } from "../__generated__/gatsby-types"

export default ({ data }: { data: movieQuery }) => {
  const post = data.movie
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.plot}</p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query movie($slug: String!) {
    movie(fields: { slug: { eq: $slug } }) {
      id
      tags {
        id
        label
        isSpoiler
      }
      title
      plot
      characters {
        type
        sexuality
        isSpoiler
        gender
        isOut
      }
    }
  }
`
