import React, { useContext } from "react";
import numberFormat from "number-format.js";

import * as C from "./styles";
import { TrackerContext } from "../../contexts/TrackerContext";
import { formatDate } from "../../helpers/dataFilter";
import { Item } from "../../types/TrackerContextTypes";

type Props = {
    item: Item;
};

const ItemRow: React.FC<Props> = ({ item }) => {
	const { categories } = useContext(TrackerContext);

	const category = categories.find(category => category.id == item.category_id);

	return (
		<C.Container className={category?.type}>
			<div className="content">
				<h1>{item.title}</h1>
				<p>{category?.name || "Desconhecida"}</p>
			</div>
			<div className="data-item">
				<p className={category?.type}>R$ {category?.type == "expense" && "-"}{numberFormat("#.##0,00", item.value)}</p>
				<span>{formatDate(item.created_at)}</span>
			</div>
		</C.Container>
	);
};

export default ItemRow;