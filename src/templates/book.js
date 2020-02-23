import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.book
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    book(fields: { slug: { eq: $slug } }) {
      id
      tags
      title
      categories
      authors
      language
      comicsContent
      characters {
        type
        sexuality
        isSpoiler
        gender
        isOut
      }
      description
      isbn
      publishedDate
    }
  }
`
