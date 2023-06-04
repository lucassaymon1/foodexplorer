import { styled } from "styled-components";

export const Container = styled.textarea`
    padding: 1.6rem 1.4rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border: none; 
    outline: none;
    height: 17.2rem;
    width: 100%;

    color: ${({theme}) => theme.COLORS.LIGHT_400};

    &:placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`