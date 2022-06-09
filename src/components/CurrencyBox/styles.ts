import styled from "styled-components";

export const Container = styled.div<{ gridArea: string, bgColor?: "green" | "red" }>`
    grid-area: ${props => props.gridArea};
    width: 100%;
    max-width: 250px;
    height: 130px;
    
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.colors.background.modal};
    border-radius: 3px;
    background-color: ${props => props.bgColor ? props.theme.colors.background[props.bgColor].default :  props.theme.colors.background.modal};

    @media (max-width: 800px) {
        padding: 15px;
        max-width: 100%;
    }

    &:hover {
        border: 1px solid ${props => props.theme.colors.input.border};
    }
`;

export const Header = styled.div`
    width: 100%;
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 16px;
        color: ${props => props.theme.colors.text.default};
        user-select: none;
    }

    svg {
        width: 25px;
        height: 25px;
        fill: ${props => props.theme.colors.icon.default};
    }
`;

export const Value = styled.div`
    width: 100%;
    min-height: 25px;
    font-size: 25px;
    font-weight: normal;
    user-select: none;
    cursor: pointer;
`;