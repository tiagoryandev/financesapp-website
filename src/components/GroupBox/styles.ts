import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "income expense balance";
    grid-gap: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
    
    @media (max-width: 800px) {
        overflow: auto hidden;
        padding-bottom: 10px;
        margin: 0px 0px;
        scroll-behavior: smooth;
    }

    @media (min-width: 801px) {
        justify-content: center;
    }
`;