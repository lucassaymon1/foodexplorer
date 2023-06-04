import styled from "styled-components"

export const Container = styled.header`
  .header{
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: ${({isAdm}) => isAdm ? "5.5rem 0 2.8rem 2.4rem" : "5.5rem 2.4rem 2.8rem 2.4rem"};
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    z-index: 2000;
    position: relative;

    .logo-container{
      width: 100%;
      text-align: center;
      position: relative;
      >h1{
        opacity: 0;
        left: 0;
        position: absolute;
        font-size: 2.1rem;
        line-height: 2.9rem;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        transition: all ease .3s;
      }
      >.menu-heading{
        opacity: 1;
        left: 1.6rem;
      }
    }
    .logo{
      display: flex;
      gap: .8rem;
      align-items: center;
      justify-content: center;
      
      h1{
        font-size: 2.1rem;
      }
      img{
        width: 2.4rem;
      }
      p{
        color: ${({theme}) => theme.COLORS.CAKE_200};
        margin-top: .2rem;
        margin-left: .2rem;
        font-size: 1.2rem;
        line-height: 1.92rem;
      }
    }
    .logo-inactive{
      color: transparent;
      background: none;
      p, img, h1{
        opacity: 0;
        transition: all ease 0.3s;
      }
    }
    >.hamburger{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4.5px;
      height: 1.8rem;
      width: 2.4rem;
      padding: 10px;

      position: relative;
  
      border: none;
      background: none;
  
      >.bar, .bar-before, .bar-after{
        border: 1px solid white;
        width: 2.4rem;
        height: 0;
        border-radius: .5rem;
        transition: all ease .3s;
        position: absolute;
      }
      > .bar-before{
        top: 0;
      }
      >.bar{
        top: 48%;
      }
      >.bar-after{
        bottom: 0;
      }

      >.before-active{
        top: 1rem;
        transform: rotate(45deg);
      }
      >.bar-inactive{
        border-color: transparent;
      }
      >.after-active{
        top: 1rem;
        transform: rotate(-45deg);
      }
  
    }
    >.popup-icon{
      position: relative;
      .popup{
        display: flex;
        align-items: center;
        justify-content: center;
  
        position: absolute;
        top: -1rem;
        right: -1rem;
  
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        height: 2rem;
        width: 2rem;
        font-size: 1.4rem;
        border-radius: 50%;
        
      }
      svg{
        display: block;
      }
    }
    
  }

  .menu-inactive{
    top: -100rem;
  }
  .menu-active{
    top: 11rem;

  }
  .menu{
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    padding: 3.6rem 2.8rem;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #192227;
    
    position: absolute;
    z-index: 1000;
    
    transition: all ease .3s;
    .input-wrapper{
      padding-block: 1.2rem;
    }
  
    ul{
      list-style: none;
      margin-top: 3.6rem;
      li{
        button{
          background: none;
          border: none;
          width: 100%;
          border-bottom: 1px solid #192227;
  
          text-align: left;
          color: #E1E1E6;
          padding: 1rem;
          font-size: 2.4rem;
          line-height: 140%;
          font-weight: 300;
  
        }
      }
    }
  }
`