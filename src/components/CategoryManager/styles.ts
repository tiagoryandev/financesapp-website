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

export const InputName = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    margin: 10px 0;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.background.default};
    border-radius: 3px;
    border: 1px solid transparent;

    input {
        width: 100%;
        font-size: 16px;
        background-color: transparent;
        border: none;
        outline: none;

        &:disabled {
            cursor: pointer;
        }
    }

    svg {
        position: absolute;
        top: 5px;
        right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        transition: background-color 0.2s;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    .menu {
        display: none;
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        background-color: ${props => props.theme.colors.background.default};
        border: 1px solid ${props => props.theme.colors.input.border};

        .option {
            width: 100%;
            height: 50px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: left;
            user-select: none;
            cursor: pointer;
            padding: 0 15px;
            
            &.green {
                border-left: 5px solid ${props => props.theme.colors.background.green.default};
            }

            &.red {
                border-left: 5px solid ${props => props.theme.colors.background.red.default};
            }

            &:hover {
                background-color: ${props => props.theme.colors.background.modal};
            }
        }

        &.open {
            display: block;
        }
    }

    &:hover {
        border: 1px solid ${props => props.theme.colors.input.border};
    }

    &:not(:first-child) {
        margin-bottom: 15px;
    }
`;

export const CategoryList = styled.div`
    margin: 10px 0px;
    max-height: 300px;
    overflow: hidden auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border: 1px solid black;
        border-radius: 5px;
        background-color: ${props => props.theme.colors.background.modal};
    }
`;

export const CategoryItem = styled.div<{ type: "income" | "expense" }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 10px);
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