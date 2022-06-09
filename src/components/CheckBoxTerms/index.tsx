import React from "react";
import { MdClose } from "react-icons/md";

import * as C from "./styles";

type Props = {
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBoxTerms: React.FC<Props> = ({ checked, setChecked }) => {
	return (
		<C.Container>
			<C.Box onClick={() => setChecked(!checked)}>
				{checked && <MdClose />}
			</C.Box>
			<C.Content>Concordo com os <strong>Termos de Serviços</strong>.</C.Content>
		</C.Container>
	);
};

export default CheckBoxTerms;