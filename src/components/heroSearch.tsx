import React from "react"
import Button from "./button"

import styled from "styled-components"

const Container = styled.section`
  font-size: 32px;
  font-weight: 700;
  height: calc(80vh - 72px);
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Content = styled.div`
  position: relative;
  top: 30%;
  transform: translateY(-30%);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Text = styled.span`
  padding: 12px;
`

const HeroSearch = () => {
  const handleClick = () => console.log("click")
  return (
    <Container>
      <Content>
        <Text>I want a </Text>
        <select id="mediaType" name="mediaType">
          <option value="story">Story</option>
          <option value="movie">Movie</option>
          <option value="book">Book</option>
          <option value="tv-show">TV Show</option>
        </select>
        <Text>about a </Text>
        <select id="characterType" name="characterType">
          <option value="queer">Queer</option>
          <option value="gay">Gay</option>
          <option value="lesbian">Lesbian</option>
          <option value="bisexual">Bisexual</option>
          <option value="trans">Trans</option>
          <option value="asexual">Asexual</option>
        </select>
        <Text> character.</Text>
        <Button fontSize="24px" onClick={handleClick}>
          Find
        </Button>
      </Content>
    </Container>
  )
}

export default HeroSearch
