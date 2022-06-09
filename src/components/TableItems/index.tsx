import React, { useContext } from "react";

import * as C from "./styles";
import ItemRow from "../ItemRow";
import { TrackerContext } from "../../contexts/TrackerContext";

const TableItems: React.FC = () => {
	const { itemsFiltered } = useContext(TrackerContext);

	return (
		<C.Container>
			<C.Header>+ Minhas Transações</C.Header>
			<C.Table>
				<C.CounterItems>Nesse mês foi cadastrado <strong>{itemsFiltered.length}</strong> itens.</C.CounterItems>
				{itemsFiltered.map((item, index) => (
					<ItemRow key={index} item={item} />
				))}
			</C.Table>
		</C.Container>
	);
};

export default TableItems;