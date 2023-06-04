import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  padding: .8rem;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`