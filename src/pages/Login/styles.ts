import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-height: 500px) {
        .logomark {
            display: none;
        }
    }
`;

export const Modal = styled.form`
    width: 100%;
    max-width: 300px;
    min-height: 400px;
    margin: 10px;
    padding: 20px 20px 10px;

    background-color: ${props => props.theme.colors.background.modal};
    border-radius: 3px;

	h1 {
		margin: 10px 0 30px;
        font-size: 40px;
        user-select: none;
        text-align: center;
    }

    .redirect-link {
        margin: 20px 0px;
        color: ${props => props.theme.colors.text.description};
        text-align: center;
        user-select: none;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }

    .separator {
        margin: 30px 0px 20px;
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.colors.text.description};
    }

    @media (max-width: 340px) {
        max-width: 100%;
    }

    @media (max-height: 450px) {
        min-height: 100%;
    }
`;

export const Input = styled.div`
	margin: 10px 0px 20px;
	padding: 2px;
    border: 1px solid ${props => props.theme.colors.background.default};
	border-radius: 3px;
	background-color: ${props => props.theme.colors.background.default};

    display: flex;
    align-items: center;

    svg {
        width: 30px;
        height: 30px;
        fill: ${props => props.theme.colors.icon};
        margin-left: 10px;

        &:not(:first-child) {
            margin-right: 10px;
            cursor: pointer;
            fill: ${props => props.theme.colors.text.description};

            &.open {
                fill: ${props => props.theme.colors.icon.strong};
            }
        }
    }

    input {
        margin: 10px;
        width: 100%;
        background-color: transparent;
        
        border: none;
        outline: none;
        font-size: 15px;

        &::placeholder {
            user-select: none;
            font-size: 15px;
        }

        &.disable {
            cursor: not-allowed;
        }
	}

    &:hover {
        border: 1px solid ${props => props.theme.colors.input.border};
    }

    &:not(:first-child) {
        margin: 20px 0 10px;
    }
`;