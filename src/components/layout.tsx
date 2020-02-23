import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { LayoutSiteTitleQuery } from "../__generated__/gatsby-types"
import Header from "./header"
import "./layout.css"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery<LayoutSiteTitleQuery>(query)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout

export const query = graphql`
  query LayoutSiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`
