import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	max-width: 200px;
	min-height: 40px;
	display: block;
	margin: 0 auto;

	border: none;
	outline: none;
	cursor: pointer;
	background-color: ${props => props.theme.colors.buttons.green.default};
	border-radius: 3px;
	transition: background-color 0.3s;
	box-shadow: 0px 5px 0px ${props => props.theme.colors.buttons.green.black};

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