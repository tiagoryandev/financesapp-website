import React, { useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { MdDelete, MdArrowDropDown } from "react-icons/md";

import * as C from "./styles";
import Modal from "../Modal";
import ButtonAuth from "../ButtonAuth";
import { TrackerContext } from "../../contexts/TrackerContext";

type Props = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoryManager: React.FC<Props> = ({ isOpen, setOpen }) => {
	const { categories } = useContext(TrackerContext);
	const [newCategoryName, setNewCategoryName] = useState<string | null>(null);
	const [newCategoryType, setNewCategoryType] = useState<"income" | "expense" | null>(null);

	const openMenu = () => {
		const menu = document.querySelector("div.menu");

		menu?.classList.toggle("open");
	};

	return (
		<AnimatePresence>
			{isOpen && <Modal
				isOpen={isOpen}
				setOpen={setOpen}
			>
				<C.Title>Minhas Categorias</C.Title>

				<C.Header>Criar uma Categoria</C.Header>

				<C.InputName>
					<input 
						type="text" 
						placeholder="Digite o Nome da Categoria" 
						value={newCategoryName || ""}
						onChange={e => setNewCategoryName(e.target.value === "" ? null : e.target.value)} 
					/>
				</C.InputName>

				<C.InputName onClick={openMenu}>
					<input type="text" placeholder="Selecione o Tipo da Categoria" value={(newCategoryType && newCategoryType === "income" ? "Receita" : "Despesa") || ""} disabled />
					<MdArrowDropDown />
					<div className="menu">
						<div className="option green" onClick={() => setNewCategoryType("income")}>Receita</div>
						<div className="option red" onClick={() => setNewCategoryType("expense")} >Despesa</div>
					</div>
				</C.InputName>

				<ButtonAuth disabled={false} title="Criar Categoria" />

				<C.Header>Lista de Categorias</C.Header>

				<C.CategoryList>
					{categories.map(category => (
						<C.CategoryItem type={category.type} key={category.id}>
							<C.Content>
								<h2>{category.name}</h2>
								<p>{category.type === "income" ? "Receita" : "Despesa"}</p>
							</C.Content>
							<C.Manager>
								<MdDelete />
							</C.Manager>
						</C.CategoryItem>
					))}
				</C.CategoryList>
			</Modal>}
		</AnimatePresence>
	);
};

export default CategoryManager;