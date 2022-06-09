import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 60px;
`;

export const Header = styled.p`
    margin: 20px 0;
    user-select: none;
    color: ${props => props.theme.colors.text.description};
`;

export const Table = styled.div`
    padding: 20px;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.background.modal};

    @media (max-width: 800px) {
        padding: 10px;
    }
`;

export const CounterItems = styled.div`
    text-align: center;
    user-select: none;
    font-size: 16px;
    color: ${props => props.theme.colors.text.description};
    margin-bottom: 10px;

    @media (max-width: 800px) {
        margin: 10px;
    }
`;