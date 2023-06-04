import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.95rem 2.75rem;
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .65rem;
  }

  h1{
    color: ${({theme}) => theme.COLORS. LIGHT_700};
  }


`