import styled from "styled-components";

import ScrollContainer from "react-indiana-drag-scroll";

export const WarningScroll = styled.div`
    display: none;
    align-items: center;
    margin-bottom: 20px;
    user-select: none;
    padding: 10px;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.background.modal};

    @media (max-width: 800px) {
        display: flex;
    }
`;

export const Container = styled(ScrollContainer)`
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