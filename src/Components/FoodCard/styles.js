import { styled } from "styled-components"

export const Container = styled.div`
  background: ${({theme}) => theme.COLORS.DARK_200};
  border-radius: .8rem;
  min-width: 21rem;
  height: 29.2rem;

  position: relative;

  text-align: center;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  z-index: 0;

  
  .icon{
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    outline:none;
    border: none;
    background: none;
    z-index: 2000;
  }

  .quantify-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
  }
  .quantify{
    h3{
      font-weight: 400;
      font-size: 1.8rem;
    }
  }
  .details-button{
    background: none;
    border: none;
    position: relative;
    z-index: 1000;
    width: fit-content;
    height: fit-content;

    h2{
      color: ${({theme}) => theme.COLORS.CAKE_200};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.8rem;
    }
    
    h3{
      margin: .8rem auto 1.2rem;
      font-weight: 400;
    }
    img{
      width: 8.8rem;
    }
    .description{
      display: none;
    }
  }

  @media screen and (min-width: 1024px){

    
    min-width: 30.4rem;
    height: 46.2rem;
    padding: 2.4rem 2.6rem 3.2rem;

    .details-button{
      img{
        width: 17.6rem;
      }
      h3{
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
        margin-block: 1.5rem;
      }
      h2{
        font-size: 3.2rem;
        line-height: 5.1rem;
      }
      p{
        margin-bottom: 1.5rem;
      }
      .description{
        display: block;
      }
    }

    .quantify-container{
      flex-direction: row;
      gap: 1.6rem;
      padding-inline: 2.4rem;
      .quantify{
        h3{
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }
  }


`