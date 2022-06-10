import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 10px;
    text-align: center;
    color: ${props => props.theme.colors.text.description};
    user-select: none;
    font-size: 12px;

    @media (max-height: 550px) {
        display: none;
    }
`;