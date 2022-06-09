import React from "react";

import * as C from "./styles";

const LogoMark: React.FC = () => {
	return (
		<C.Container className="logomark">
			<C.LogoIcon />
			<h1>Finances</h1>
		</C.Container>
	);
};

export default LogoMark;