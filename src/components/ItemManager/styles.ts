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

export const DobleInputs = styled.div`
    display: flex;
    align-items: center;

    div:nth-child(1) {
        margin: 0px 10px 0px 0px;
    }

    div:nth-child(2) {
        margin: 0px 0px 0px 10px;
    }
`;

export const InputName = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    margin: 20px 0;
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
        z-index: 100;
        width: 100%;
        background-color: ${props => props.theme.colors.background.default};
        border: 1px solid ${props => props.theme.colors.input.border};
        overflow: hidden auto;
        max-height: 200px;

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

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border: 1px solid black;
            border-radius: 5px;
            background-color: ${props => props.theme.colors.background.modal};
        }
    }

    &:hover {
        border: 1px solid ${props => props.theme.colors.input.border};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    input::-webkit-calendar-picker-indicator { 
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
    }
`;