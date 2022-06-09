import styled from "styled-components";

export const Title = styled.h1`
    user-select: none;
    font-size: 20px;
`;

export const Header = styled.h1`
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 20px;
    color: ${props => props.theme.colors.text.description};
`;

export const CategoryList = styled.div`
    margin: 10px 0px;
    max-height: 200px;
    overflow: hidden auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CategoryItem = styled.div<{ type: "income" | "expense" }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-left: 5px solid ${props => props.type === "income" ? props.theme.colors.background.green.default : props.theme.colors.background.red.default};
    background-color: ${props => props.theme.colors.background.default};
    margin-top: 10px;
    user-select: none;
    cursor: pointer;
`;

export const Content = styled.div`
    h2 {
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 2px;
    }

    p {
        margin-top: 2px;
        color: ${props => props.theme.colors.text.description};
    }
`;

export const Manager = styled.div`
    svg {
        width: 35px;
        height: 35px;
        padding: 5px;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 4px;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`;