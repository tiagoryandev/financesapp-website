import React, { useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import NumberFormat from "react-number-format";
import { MdArrowDropDown } from "react-icons/md";

import * as C from "./styles";
import api from "../../api";
import Modal from "../Modal";
import ButtonAuth from "../ButtonAuth";
import { NotifyContext } from "../../contexts/NotifyContext";
import { AuthContext } from "../../contexts/AuthContext";
import { TrackerContext } from "../../contexts/TrackerContext";

type Props = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemManager: React.FC<Props> = ({ isOpen, setOpen }) => {
	const { setNotify } = useContext(NotifyContext);
	const { setUpdating } = useContext(AuthContext);
	const { categories, items, setItems } = useContext(TrackerContext);
	const [title, setTitle] = useState<string | null>(null);
	const [value, setValue] = useState(0);
	const [note, setNote] = useState<string | null>(null);
	const [categoryId, setCategoryId] = useState<number | null>(null);
	const [date, setDate] = useState(new Date().toJSON());
	
	const openMenu = () => {
		const menu = document.querySelector("div.menu");

		menu?.classList.toggle("open");
	};

	const handleCreateItem = async () => {
		if (!title || !note || !categoryId) {
			setNotify({
				content: "Você precisa preencher todos os campos para criar o item.",
				timer: 5,
				type: "error"
			});
		} else {
			setUpdating(true);

			try {
				const item = await api.post("/items", {
					title,
					value,
					note,
					category_id: categoryId,
					created_at: date
				});
	
				setItems([...items, item.data.item]);
				setTitle(null);
				setValue(0);
				setNote(null);
				setCategoryId(null);
				setNotify({
					content: "Item Criado com Sucesso!",
					type: "accept",
					timer: 3
				});
			} catch (error) {
				setNotify({
					content: "Infelizmente não foi possível criar o item, pois ocorreu um problema interno em nossa plataforma. Tente novamente mais tarde.",
					type: "error",
					timer: 7
				});
			} finally {
				setUpdating(false);
			}
		}
	};

	return (
		<AnimatePresence>
			{isOpen && <Modal
				isOpen={isOpen}
				setOpen={setOpen}
			>
				<C.Title>Criar um Item</C.Title>

				<C.Header>Preencha os Dados do Item</C.Header>

				<C.InputName>
					<input
						type="text"
						placeholder="Nome do Item"
						value={title || ""}
						onChange={e => setTitle(e.target.value === "" ? null : e.target.value)}
					/>
				</C.InputName>

				<C.DobleInputs>
					<C.InputName>
						<NumberFormat
							value={value}
							displayType={"input"}
							placeholder="Valor do Item"
							thousandSeparator={"."}
							decimalSeparator={","}
							decimalScale={2}
							allowNegative={false}
							prefix={"R$ "}
							onValueChange={({ floatValue }) => setValue(floatValue || 0)}
						/>
					</C.InputName>
					<C.InputName>
						<input
							type="date"
							placeholder="Data de Criação"
							value={date}
							onChange={e => setDate(new Date(e.target.value).toJSON())}
						/>
					</C.InputName>
				</C.DobleInputs>

				<C.InputName onClick={openMenu}>
					<input type="text" placeholder="Selecione a Categoria" value={categoryId ? categories.find(c => c.id === categoryId)?.name : ""} disabled />
					<MdArrowDropDown />
					<div className="menu">
						{categories.map(category => (
							<div key={category.id} className={`option ${category.type === "income" ? "green" : "red"}`} onClick={() => setCategoryId(category.id)}>
								{category.name}
							</div>
						))}
					</div>
				</C.InputName>

				<C.InputName>
					<input
						type="text"
						placeholder="Nota de Descrição"
						value={note || ""}
						onChange={e => setNote(e.target.value === "" ? null : e.target.value)}
					/>
				</C.InputName>

				<ButtonAuth title="Criar Item" onClick={handleCreateItem} disabled={false} />
			</Modal>}
		</AnimatePresence>
	);
};

export default ItemManager;