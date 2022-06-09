import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        color: ${props => props.theme.colors.text.default};
    }

    html, body, #root {
        background-color: ${props => props.theme.colors.background.default};
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 10px;
            background-color: ${props => props.theme.colors.background.default};
        }

        &::-webkit-scrollbar-thumb {
            border: 1px solid black;
            border-radius: 5px;
            background-color: ${props => props.theme.colors.background.modal};
        }
    }
`;