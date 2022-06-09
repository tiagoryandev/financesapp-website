import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled(motion.div)`
    position: relative;

    width: 100%;
    max-width: 400px;
    min-height: 500px;
    padding: 20px;

    background-color: ${props => props.theme.colors.background.modal};
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colors.input.border};

    @media (max-width: 400px) and (max-height: 900px) {
        display: block;
        max-width: 100%;
        min-height: 100%;
        border: none;
        border-radius: 0;
    }
`;

export const ClosedMenuIcon = styled(MdClose)`
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
    width: 35px;
    height: 35px;
    padding: 5px;
    fill: ${props => props.theme.colors.icon.default};
    border-radius: 50%;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;