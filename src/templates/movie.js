import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
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
  query($slug: String!) {
    movie(fields: { slug: { eq: $slug } }) {
      id
      tags
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
