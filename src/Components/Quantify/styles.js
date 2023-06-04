import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  
  h3{
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 160%;
  }

  button{
    background: none;
    border: none;

    display: flex;
    align-items: center;
    min-height: 3rem;
    min-width: 1.8rem;
    svg{
      width: 100%;
      height: auto;
    }
  }
`