import React from "react"
import { graphql } from "gatsby"
// @ts-ignore
import Layout from "../components/layout"
import { bookQuery } from "../__generated__/gatsby-types"
export default ({ data }: { data: bookQuery }) => {
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
  query book($slug: String!) {
    book(fields: { slug: { eq: $slug } }) {
      id
      tags {
        id
        label
        isSpoiler
      }
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
