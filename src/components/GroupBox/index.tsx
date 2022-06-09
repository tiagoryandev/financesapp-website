import React from "react";
import { MdNorth, MdSouth, MdAccountBalance } from "react-icons/md";

import * as C from "./styles";
import CurrencyBox from "../CurrencyBox";

type Props = {
	income: number;
	expense: number;
};

const GroupBox: React.FC<Props> = ({ income, expense }) => {
	return (
		<C.Container>
			<CurrencyBox 
				gridArea="income" 
				title="Receita"
				value={income}
				icon={<MdNorth />}
			/>
			<CurrencyBox 
				gridArea="expense" 
				title="Despesas"
				value={expense}
				icon={<MdSouth />}
			/>
			<CurrencyBox 
				gridArea="balance" 
				bgColor={(income - expense) < 0 ? "red" : "green"}
				title="Balanço"
				value={income - expense}
				icon={<MdAccountBalance />}
			/>
		</C.Container>
	);
};

export default GroupBox;