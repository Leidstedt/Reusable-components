import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  height:40px;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export const Button = () => (
    <div>
      <StyledButton>Button</StyledButton>
    </div>
  
)