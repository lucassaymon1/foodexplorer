import { styled } from "styled-components";

export const Container = styled.div`
  .input-container{
    display: flex;
    align-items: center;
    gap: .8rem;
    flex-wrap: wrap;

    width: 100%;
    padding: .8rem;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: .8rem;
    margin-top: 1.6rem;
  }

  main{
    margin: 1.1rem 3.5rem;

    .button-text{
      a{
        font-size: 1.8rem;
      }
      svg{
        width: .8rem;
      }
    }
  }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 2.4rem;
  
  margin: 2.4rem auto 5.3rem;
  width: 100%;
  max-width: 50rem;

  .change-bgcolor, textarea{
    background-color: #0D161B;
  }
  
  h1{
    font-size: 3.8rem;
    line-height: 3.8rem;
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  label{
    margin-bottom: 1.6rem;
    display: block;
  }

  .input-image{
    display: flex;
    align-items: center;
    gap: 2rem;

    margin: 1.6rem auto 0;
    padding: 1.2rem 3.2rem;
    border-radius: 8px;
    border: none; 
    outline: none;

    color: white;
    cursor: pointer;

    >input[type="file"]{
      display: none;
    }
    span{
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      
    }
    
  }

  .select-container{
    display: flex;
    justify-content: center;
    flex-direction: column;

    border-radius: 8px;
    position: relative;
    border: none; 
    outline: none;

    color: ${({theme}) => theme.COLORS.LIGHT_400};
    cursor: pointer;

    .select-box{
      margin-top: 0;
      border: none;
      outline: none;
      appearance: none;
      background-color: ${({theme}) => theme.COLORS.DARK_900};
      border-radius: .5rem;
      
      padding: 1.6rem 1.4rem;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      width: 100%;
  
      cursor: pointer;
    }
    .icon-container{
      height: 100%;
      position: absolute;
      right: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      >svg{
        transform: rotate(-90deg);
        width: .8rem;
      }
    }
  }
  .select-label{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    margin-bottom: -1rem;
  }



  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }

  .button-container{
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: 1fr 1.3fr;

    

    button:nth-child(1){
      background: #0D161B;
    }
  }

  
`