import React, { useState } from "react"

import styled from "styled-components"
import { caretDownOutline } from "ionicons/icons"
type Props = {
  options: Array<{ id: string; value: string }>
  onSelect: (option: string) => void
  initialOption: string
  fontSize?: string
}

const List = styled.ul`
  display: ${(props: { showList: boolean }) =>
    props.showList === true ? "block" : "none"};
  background-color: #0e79b2;
`

const DropdownButton = styled.button`
  padding: 12px;
  margin: 2px;
  border: none;
  background-color: #0e79b2;
  border-radius: 4px;
  font-size: ${(props: { fontSize?: null | string }) =>
    props.fontSize != null ? props.fontSize : "18px"};
  color: white;
  font-weight: 700;
  &:hover {
    filter: brightness(85%);
    cursor: pointer;
  }
  min-width: 100px;
  white-space: nowrap;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Icon = styled.img`
  color: white;
  width: 16px;
`

const Dropdown = ({ options, onSelect, initialOption }: Props) => {
  const [showList, setShowList] = useState(false)
  const [selected, setSelected] = useState(
    options.find(option => option.id === initialOption)
  )
  return (
    <Container>
      <DropdownButton onClick={() => setShowList(showList => !showList)}>
        Select...
        <Icon src={caretDownOutline} />
      </DropdownButton>
      <List showList={showList}>
        {options.map(option => {
          return <li key={option.id}>{option.value}</li>
        })}
      </List>
    </Container>
  )
}

export default Dropdown
