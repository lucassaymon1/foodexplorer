import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  html, *{
    margin: 0;
    box-sizing: border-box;

  }

  body{
    color: #ffffff;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-size: 1.4rem;
    position: relative;
    min-height: 100%;
  }

  h1{
    font-family: 'Roboto', sans-serif;
  }

  
  p, h2, h3, label{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  label{
    font-family: 'Roboto', sans-serif;
  }
  p, label{
    font-weight: 400;
  }

  button, a{
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px){
    body{
      min-height: 100vh;
    }
    
  }


`
