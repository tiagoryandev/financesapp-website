import React, { useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";

import * as C from "./styles";
import api from "../../api";
import ItemRow from "../ItemRow";
import Modal from "../Modal";
import { NotifyContext } from "../../contexts/NotifyContext";
import { AuthContext } from "../../contexts/AuthContext";
import { TrackerContext } from "../../contexts/TrackerContext";
import { Item } from "../../types/TrackerContextTypes";
import { formatDate } from "../../helpers/dataFilter";

const TableItems: React.FC = () => {
	const { setNotify } = useContext(NotifyContext);
	const { setUpdating } = useContext(AuthContext);
	const { items, setItems, itemsFiltered, categories } = useContext(TrackerContext);
	const [itemInfo, setItemInfo] = useState<Item | null>(null);
	const [openItem, setOpenItem] = useState(false);

	const handleOpenItemInfo = (item: Item) => {
		setItemInfo(item);
		setOpenItem(!openItem);
	};

	const handleRemoveItem = async () => {
		setUpdating(true);

		if (itemInfo) {
			try {
				await api.delete("/items/" + itemInfo.id);

				setItems(items.filter(item => item.id !== itemInfo.id));

				setNotify({
					content: "Item removido com Sucesso!",
					timer: 3,
					type: "accept"
				});
			} catch (error) {
				setNotify({
					content: "Ocorreu um problema ao remover o Item. Tente novamente mais tarde!",
					timer: 3,
					type: "error"
				});
			} finally {
				setItemInfo(null);
				setOpenItem(false);
				setUpdating(false);
			}
		}
	};

	return (
		<>
			<AnimatePresence>
				{openItem && itemInfo && <Modal isOpen={openItem} setOpen={setOpenItem}>
					<C.Title>Informações do Item</C.Title>
					<C.Label>Título</C.Label>
					<C.InputValue>{itemInfo.title}</C.InputValue>
					<C.Label>Valor</C.Label>
					<C.InputValue>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(itemInfo.value)}</C.InputValue>
					<C.Label>Categoria</C.Label>
					<C.InputValue>{categories.find(c => c.id === itemInfo.category_id)?.name}</C.InputValue>
					<C.Label>Data de Criação</C.Label>
					<C.InputValue>{formatDate(itemInfo.created_at)}</C.InputValue>
					<C.Label>Nota do Item</C.Label>
					<C.InputValue>{itemInfo.note}</C.InputValue>
					<C.ButtonRemove onClick={handleRemoveItem}>Remover Item</C.ButtonRemove>
				</Modal>}
			</AnimatePresence>
			<C.Container>
				<C.Header>+ Minhas Transações</C.Header>
				<C.Table>
					<C.CounterItems>Nesse mês foi cadastrado <strong>{itemsFiltered.length}</strong> itens.</C.CounterItems>
					{itemsFiltered.map((item, index) => (
						<ItemRow key={index} item={item} openInfo={handleOpenItemInfo} />
					))}
				</C.Table>
			</C.Container>
		</>
	);
};

export default TableItems;