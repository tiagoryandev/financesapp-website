import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
`;

export const LoadingCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.colors.background.modal};
    border-top: 5px solid ${props => props.theme.colors.icon.default};
    animation: Rotation 1s infinite linear;

    @keyframes Rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;