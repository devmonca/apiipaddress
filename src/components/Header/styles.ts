import styled from "styled-components";

export const HeaderContainer = styled.header`
    h1{
        color: ${({theme})=> theme.colors.background};
        font: ${({ theme })=> theme.fonts.title};
        text-align: center;
    }
`