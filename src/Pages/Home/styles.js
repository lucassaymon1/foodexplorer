import { styled } from "styled-components"

export const Container = styled.div`

  main{
    margin-inline: calc(.8rem + 1.8625vw);
    padding-bottom: 4rem;
  }
  .banner{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 2rem;

    position: relative;

    margin: 4.4rem 0 4rem;
    margin-left: .8rem;
    width: 100%;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    height: 12rem;
    border-radius: 3px;

    h2{
      font-size: 1.8rem;
    }
    p{
      font-size: 1.2rem;
    }

    .mobile-img{
      position: absolute;
      left: -3rem;
      bottom: 0;
      overflow: auto;
      margin-right: 3rem;
    }
    .desktop-img{
      display: none
    }
    .img-container{
      margin-left: 14.5rem;
    }
    .lettering-container{
      margin-right: 1.5rem;
    }

  }

  @media screen and (min-width: 1024px){
    main{

      margin-inline: calc(2.3rem + 6.8625vw);
      padding-bottom: 7.4rem;
      
      .banner{
  
        height: 26rem;
        border-radius: .8rem;
        margin: 17.2rem 0 6.2rem;
        .lettering-container{
          margin-right: calc(2.3rem + 3.8625vw);

          h2{
            font-size: 4rem;
            line-height: 5.6rem;
            font-weight: 500;
            margin-bottom: .8rem;
          }
          p{
            font-size: 1.6rem;
            max-width: 41.7rem;
          }
        }
  
        .desktop-img{
          display: block;
          position: absolute;
          left: -6rem;
          bottom: 0;
          overflow: auto;
          margin-right: 3rem;
          
        }
        .mobile-img{
          display: none;
        }
  
  
      }
    }
      
  }

`