import React from "react";

import * as C from "./styles";

type Props = {
    gridArea: string;
	bgColor?: "green" | "red";
	title: string;
	value: number;
	icon: JSX.Element;
};

const CurrencyBox: React.FC<Props> = ({ gridArea, bgColor, title, value, icon }) => {
	const currencyFormat = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL"
	}).format(value);
	
	return (
		<C.Container gridArea={gridArea} bgColor={bgColor}>
			<C.Header>
				<h1>{title}</h1>
				{icon}
			</C.Header>
			<C.Value>{currencyFormat}</C.Value>
		</C.Container>
	);
};

export default CurrencyBox;