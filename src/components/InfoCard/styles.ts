import styled from "styled-components";

export const InfoCardList = styled.ul`
    max-width: 350px;
    margin: 0 auto;
    list-style: none;
    padding: 2rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    display: grid;
    grid-template-columns: 100%;
    justify-content: space-evenly;
    gap: 2rem;
    text-align: center;

    @media (min-width: 768px) {
        grid-template-columns: 20% 1px 20% 1px 20% 1px 20%;
        flex-direction: row;
        text-align: left;
        padding: 2rem;
        max-width: 72rem;
        margin: 2rem;
    }
`

export const InfoCardItem = styled.li`
    label{
        display: block;
        text-align: center;
        font: 14px;
        color: #969696;
        font: ${({ theme }) => theme.fonts.semibold};
        text-transform: uppercase;
        margin-bottom: 1rem;  
    }

    @media (min-width: 768px) {
        label{
            text-align: left;
        }
    }  

    span{
        font: ${({ theme }) => theme.fonts.title};
        color: ${({ theme }) => theme.colors.text};
        max-width: 170px;
        overflow-wrap: break-word;
    }
`

export const InforCardDivisor = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.border};
    display: none;
    
    @media (min-width: 768px) {
        display: block;
    }  
`