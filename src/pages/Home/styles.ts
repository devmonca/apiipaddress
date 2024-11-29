import styled from "styled-components";

export const LowerLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 0;
    overflow: hidden;
`

export const BackgroundImage = styled.img`
    src: url(${props => props.src});
    height: 300px;
    width: 100%;

    @media (min-width: 763px) {
        height: 40%;
    }
`

export const UpperLayer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`