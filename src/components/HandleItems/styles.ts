import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0;
    display: flex;

    @media (max-width: 800px) {
        margin: 10px 0;
    }
`;

export const HandleMonth = styled.div`
    width: 100%;
    max-width: 300px;
    height: 50px;

    border: 1px solid ${props => props.theme.colors.background.modal};
    border-radius: 3px;
    background-color: ${props => props.theme.colors.background.modal};

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        user-select: none;
        color: ${props => props.theme.colors.text.default};
    }

    svg {
        fill: ${props => props.theme.colors.icon.default};
        border-radius: 50%;
        transition: background-color 0.3s;
        margin: 0 10px;
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    &:hover {
        border: 1px solid ${props => props.theme.colors.input.border};
    }

    @media (max-width: 440px) {
        max-width: 100%;
    }
`;

export const ButtonOption = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;
    border: 1px solid ${props => props.theme.colors.background.modal};
    background-color: ${props => props.theme.colors.background.modal};

    svg {
        cursor: pointer;
        fill: ${props => props.theme.colors.icon.default};
        transition: fill 0.3s;
        
        &:hover {
            fill: ${props => props.theme.colors.icon.strong};
        }
    }

    &:hover {
        border: 1px solid ${props => props.theme.colors.input.border};
    }

    @media (max-width: 800px) {
        margin-left: 10px;
    }

    @media (max-width: 440px) {
        display: none;
    }
`;

export const ButtonFixed = styled.div`
    display: none;

    position: fixed;
    bottom: 20px;
    right: 20px;

    @media (max-width: 440px) {
        display: block;
    }
`;

export const ButtonFixedOption = styled.div`
    margin-top: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid ${props => props.theme.colors.background.default};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.background.modal};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        fill: ${props => props.theme.colors.icon.default};
    }
`;