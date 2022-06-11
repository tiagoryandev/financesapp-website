import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 60px;
`;

export const Header = styled.p`
    margin: 20px 0;
    user-select: none;
    color: ${props => props.theme.colors.text.description};
`;

export const Table = styled.div`
    padding: 20px;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.background.modal};

    @media (max-width: 800px) {
        padding: 10px;
    }
`;

export const CounterItems = styled.div`
    text-align: center;
    user-select: none;
    font-size: 16px;
    color: ${props => props.theme.colors.text.description};
    margin-bottom: 10px;

    @media (max-width: 800px) {
        margin: 10px;
    }
`;

export const Title = styled.h1`
    user-select: none;
    font-size: 20px;
`;

export const Label = styled.h1`
    user-select: none;
    font-size: 15px;
    text-transform: uppercase;
    margin-top: 20px;
    color: ${props => props.theme.colors.text.description};
`;

export const InputValue = styled.p`
    margin-top: 5px;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
    width: 100%;
    max-height: 100px;
    overflow: hidden auto;
    text-overflow: ellipsis;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border: 1px solid black;
        border-radius: 5px;
        background-color: ${props => props.theme.colors.background.modal};
    }
`;

export const ButtonRemove = styled.button`
	width: 100%;
	max-width: 200px;
	min-height: 40px;
	display: block;
	margin: 30px auto 0;

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