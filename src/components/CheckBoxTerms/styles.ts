import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const Box = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.background.default};
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colors.input.border};

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Content = styled.span`
    margin-left: 5px;
    user-select: none;
    font-size: 12px;
    color: ${props => props.theme.colors.text.description};

    strong {
        color: ${props => props.theme.colors.text.description};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;