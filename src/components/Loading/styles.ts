import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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