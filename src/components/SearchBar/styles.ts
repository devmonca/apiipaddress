import styled from "styled-components";

export const SearchBarForm = styled.form`
    display: flex;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 12px;
    max-width: 450px;
    margin: 1rem auto;
`

export const SearchBarInput = styled.input`
    flex: 1;
    padding: 1rem 2rem 1rem 1rem;
    outline: none;
    background-color: transparent;
    font: ${({theme})=> theme.fonts.text};
    color: ${({theme})=> theme.colors.text};

    &::placeholder{
        color: ${({theme})=> theme.colors.border};
        font: ${({theme})=> theme.fonts.text};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.border};
    }

    @media (min-width: 768px) {
        padding: 1rem 12rem 1rem 1rem;
        text-indent: 0;
    }
`

export const SearchBarButton = styled.button`
    padding: 18px 24px;
    border: none;
    background-color: ${({ theme }) => theme.colors.text};
    font: ${({ theme }) => theme.fonts.text};
    color: ${({theme})=> theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 14px 14px 0;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`

