import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "income expense balance";
    grid-gap: 20px;

    @media (max-width: 800px) {
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "balance balance" "income expense";
    }

    @media (max-width: 360px) {
        grid-template-columns: 1fr;
        grid-template-areas: "balance" "income" "expense";
    }
`;