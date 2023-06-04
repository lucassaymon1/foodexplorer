import { styled } from "styled-components"

export const Container = styled.div`
  .banner{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 2rem;

    position: relative;

    margin: 4.4rem 3.6rem 3rem 4rem;
    margin-inline: 3.6rem;
    width: 90%;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    height: 12rem;
    border-radius: 3px;
    img{
      position: absolute;
      left: -3rem;
      bottom: 0;
      overflow: auto;
      margin-right: 3rem;
    }
    .img-container{
      margin-left: 14.5rem;
    }
    .lettering-container{
      margin-right: 1.5rem;
    }

  }

`