import { styled } from "styled-components";

export const Container = styled.div`

main{
    a{
      font-size: 2.4rem;
      text-align: left;
    }

    img{
      margin:1.6rem auto;
    }

    h1{
      margin-top:16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p{
      margin: 2.4rem auto 2.4rem;
      max-width: 28.6rem;
    }

    text-align: center;
    margin: 3.2rem 6rem 5rem;

    .tags-container{
      margin: 0 auto 4.8rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;

      max-width: 28.6rem;
    }

    .order-container{
      display: flex;
      justify-content: center;
      gap: 2rem;
      max-width: 31.6rem;
      margin: auto;
      > button{
        display: flex;
        gap: .8rem;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        line-height: 1.6rem;
        svg{
          width: 2.1rem;
        }
      }


      .quantify{
        button{
          width: 2.2rem;
        }
        font-size: 2.2rem;
      }
    }
  
  }
`