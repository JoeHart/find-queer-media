import React, { ReactNode } from "react"

import styled, { StyledComponent } from "styled-components"

type Props = {
  onClick: () => void
  children: ReactNode
  fontSize?: string
}
// 0E79B2
// BF1363
// F39237
const StyledButton = styled.button`
  padding: 12px;
  margin: 2px;
  border: none;
  background-color: #0e79b2;
  border-radius: 4px;
  font-size: ${(props: Props) =>
    props.fontSize != null ? props.fontSize : "18px"};
  color: white;
  font-weight: 700;
  &:hover {
    filter: brightness(85%);
    cursor: pointer;
  }
  min-width: 100px;
`

const Button = ({ children, onClick, fontSize }: Props) => {
  return (
    <StyledButton fontSize={fontSize} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
