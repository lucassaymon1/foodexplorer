import { styled } from "styled-components"

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;


  
  .input-wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.4rem;
  
    padding: 1.6rem 1.4rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.DARK_900};

    input{
      width: 100%;
      border: none; 
      outline: none;
      background: none;
      font-size: 1.6rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
  
      color: ${({theme}) => theme.COLORS.LIGHT_300};
  
      &:placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }
    }

    label{
      font-size: 1.6rem;
    }
  }
  
`

export const NumberContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  width: 100%;

  .input-wrapper{
    display: flex;
    gap: .4rem;
    align-items: center;

    width: 100%;

    padding: 1.6rem 1.4rem;
    border-radius: 8px;
    background-color: #0D161B;;
    border: none; 
    outline: none;

    color: ${({theme}) => theme.COLORS.LIGHT_400};
    p{
      margin-top: .1rem;
    }
    input{

      width: 100%;
      background: none;
      border: none;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      outline: none;

      &:placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }
    }
  }
`