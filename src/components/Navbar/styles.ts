import styled from "styled-components";
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

export const Title = styled.h1`
    user-select: none;
    font-size: 20px;
`;

export const UserInfo = styled.div`
    user-select: none;

    h1 {
        display: flex;
        align-items: center;

        margin-top: 15px;
        font-size: 25px;

        span {
            cursor: pointer;
            padding: 3px 5px;
            margin-left: 10px;
            font-size: 14px;
            border-radius: 3px;

            &.user {
                background-color: ${props => props.theme.colors.buttons.green.default};
            }

            &.admin {
                background-color: ${props => props.theme.colors.buttons.red.default};
            }
        }
    }

    .email {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 5px;
        color: ${props => props.theme.colors.text.description};

        &:hover {
            text-decoration: underline;
        }

        svg {
            fill: ${props => props.theme.colors.buttons.green.default};
            margin-right: 5px;
        }
    }
`;

export const ButtonLogout = styled.button`
	width: 100%;
	max-width: 200px;
	min-height: 40px;
	display: block;
	margin: 20px auto 10px;

	border: none;
	outline: none;
	cursor: pointer;
	background-color: ${props => props.theme.colors.buttons.red.default};
	border-radius: 3px;
	transition: background-color 0.3s;
	box-shadow: 0px 5px 0px ${props => props.theme.colors.buttons.red.black};

	font-weight: bold;
	font-size: 16px;
	user-select: none;

	&:active {
		transform: translateY(5px);
		box-shadow: none;
	}

	&.disabled {
		transform: translateY(5px);
		box-shadow: none;
	}
`;