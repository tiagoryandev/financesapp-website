import styled from "styled-components";
import { motion } from "framer-motion";
import { MdCalculate } from "react-icons/md";

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 60px;
    
    margin: 0 auto;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoMark = styled.div`
    display: flex;
    align-items: center;

    h1 {
        margin-left: 5px;
        font-size: 25px;
        user-select: none;

        @media (max-width: 400px) {
            display: none;
        }
    }
`;

export const LogoIcon = styled(MdCalculate)`
    width: 35px;
    height: 35px;
    fill: ${props => props.theme.colors.icon.default};
`;

export const Options = styled.div`
    display: flex;
    align-items: center;

    span {
        position: relative;
        margin: 0 10px;
        cursor: pointer;
        user-select: none;

        background-color: ${props => props.theme.colors.background.modal};
        transition: background-color 0.3s;
        padding: 5px 7px;
        border-radius: 3px;

        &:hover {
            background-color: ${props => props.theme.colors.background.green.default};
        }
    }
`;

export const UserInfo = styled(motion.div)`
    position: absolute;
    top: 50px;
    right: 0;

    padding: 10px;
    width: 250px;
    height: 60px;
    background-color: ${props => props.theme.colors.background.modal};
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: -10px;
        right: 6px;

        width: 20px;
        height: 20px;
        background-color: ${props => props.theme.colors.background.modal};
        transform: rotate(45deg);
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.background.default};
    }

    .infos {
        margin-left: 10px;

        .name {
            user-select: none;
            color: ${props => props.theme.colors.text.default};
        }

        .email {
            user-select: none;
            font-size: 14px;
            color: ${props => props.theme.colors.text.description};
        }
    }
`;