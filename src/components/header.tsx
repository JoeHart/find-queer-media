import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type Props = {
  siteTitle: string
}

const HeaderContainer = styled.header`
  width: 100%;
`

const HeaderSection = styled.section`
  max-width: 950px;
  height: 72px;
  margin: 0 auto;
  display: flex;
`

const SiteTitle = styled.h1`
  font-size: 24px;
  margin: 24px 8px;
`
const SiteTitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }: Props) => (
  <HeaderContainer>
    <HeaderSection>
      <SiteTitle>
        <SiteTitleLink to="/">{siteTitle}</SiteTitleLink>
      </SiteTitle>
    </HeaderSection>
  </HeaderContainer>
)
export default Header
