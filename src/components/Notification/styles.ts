import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)<{ type?: "accept" | "error", timer?: number }>`
	width: 100%;
	max-width: 500px;
	min-height: 50px;
	margin: 10px auto;
	padding: 10px;
	background-color: ${props => props.type && props.type == "error" ? "crimson" : props.theme.colors.buttons.green.default};
	border-radius: 3px;
	
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2000;

	display: flex;

	svg {
		width: 30px;
		height: 30px;
		fill: ${props => props.theme.colors.icon.strong};
	}

	svg.close-notify {
		position: absolute;
		top: 5px;
		right: 5px;

		fill: ${props => props.theme.colors.icon.strong};
		width: 20px;
		height: 20px;
		cursor: pointer;
		border-radius: 50%;
		transition: background-color 0.3s;

		&:hover {
			background-color: rgba(255, 255, 255, 0.3);
		}
	}

	div.timer {
		width: 100%;
		height: 3px;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		border-bottom-left-radius: 3px;

		animation: Nivel ${props => props.timer ? props.timer : 3}s forwards linear;

		@keyframes Nivel {
			from {
				width: 100%;
			}
			to {
				width: 0%;
			}
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	margin: 5px 10px;
	font-size: 16px;
	color: ${props => props.theme.colors.text.strong};
	user-select: none;
`;