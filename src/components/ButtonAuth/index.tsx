import React from "react";

import * as C from "./styles";

type Props = {
	disabled: boolean;
	title: string;
	type?: "submit";
	onClick?: () => void;
};

const ButtonAuth: React.FC<Props> = ({ disabled, title, type, onClick }) => {
	return (
		<C.Container className={disabled ? "disabled" : ""} disabled={disabled} onClick={onClick} type={type}>
			{title}
		</C.Container>
	);
};

export default ButtonAuth;