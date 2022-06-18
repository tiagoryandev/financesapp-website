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
        padding: 0 10px 10px;
        margin: 0px -10px;
        scroll-behavior: smooth;
    }

    @media (min-width: 801px) {
        justify-content: center;
    }
`;