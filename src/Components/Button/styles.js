import { styled } from "styled-components"

export const Container = styled.button`
  width: 100%;
  border: none;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  border-radius: .4rem;
  padding: 1.2rem;
  color: white;
  margin-block: .8rem;
`