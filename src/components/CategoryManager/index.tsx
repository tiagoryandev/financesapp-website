import React, { useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { MdDelete, MdArrowDropDown, MdCategory } from "react-icons/md";

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

const CategoryManager: React.FC<Props> = ({ isOpen, setOpen }) => {
	const { setNotify } = useContext(NotifyContext);
	const { setUpdating } = useContext(AuthContext);
	const { categories, items, setCategories, setItems } = useContext(TrackerContext);
	const [newCategoryName, setNewCategoryName] = useState<string | null>(null);
	const [newCategoryType, setNewCategoryType] = useState<"income" | "expense" | null>(null);

	const openMenu = () => {
		const menu = document.querySelector("div.menu");

		menu?.classList.toggle("open");
	};

	const handleCreateCategory = async () => {
		if (!newCategoryName || !newCategoryType) {
			setNotify({
				content: "Você precisa informar o Nome e o Tipo da categoria para poder cria-la.",
				type: "error",
				timer: 5
			});
		} else {
			setUpdating(true);

			try {
				const { data } = await api.post("/categories", {
					name: newCategoryName,
					type: newCategoryType
				});

				setCategories([...categories, data.category]);
				setNotify({
					content: "Categoria Criada com Sucesso!",
					type: "accept",
					timer: 3
				});
			} catch (error) {
				setNotify({
					content: "Ocorreu um problema ao realizar a criação de sua categoria. Tente novamente mais tarde.",
					type: "error",
					timer: 7
				});
			} finally {
				setNewCategoryName(null);
				setNewCategoryType(null);
				setUpdating(false);
			}
		}
	};

	const handleDeleteCategory = async (category: number) => {
		setUpdating(true);

		try {
			await api.delete("/categories/" + category);

			const newList = categories.filter(c => c.id != category);
			const newItems = items.filter(i => i.category_id !== category);

			setCategories(newList);
			setItems(newItems);
			setNotify({
				content: "Categoria Removida com Sucesso!",
				type: "accept",
				timer: 3
			});
		} catch (error) {
			setNotify({
				content: "Infelizmente não foi possível remover a categoria, pois ocorreu um problema interno em nossa plataforma. Tente novamente mais tarde.",
				type: "error",
				timer: 7
			});
		} finally {
			setUpdating(false);
		}
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
					<input type="text" placeholder="Selecione o Tipo da Categoria" value={newCategoryType && (newCategoryType === "income" ? "Receita" : "Despesa") || ""} disabled />
					<MdArrowDropDown />
					<div className="menu">
						<div className="option green" onClick={() => setNewCategoryType("income")}>Receita</div>
						<div className="option red" onClick={() => setNewCategoryType("expense")} >Despesa</div>
					</div>
				</C.InputName>

				<ButtonAuth disabled={false} title="Criar Categoria" onClick={handleCreateCategory} />

				<C.Header>Lista de Categorias</C.Header>

				<C.CategoryList>
					{categories.length === 0 && (
						<div className="not-category">
							<MdCategory size={50} />
							<span>Nenhuma categoria cadastrada no momento.</span>
						</div>
					)}
					{categories.map(category => (
						<C.CategoryItem type={category.type} key={category.id}>
							<C.Content>
								<h2>{category.name}</h2>
								<p>{category.type === "income" ? "Receita" : "Despesa"}</p>
							</C.Content>
							<C.Manager>
								<MdDelete onClick={() => handleDeleteCategory(category.id)} />
							</C.Manager>
						</C.CategoryItem>
					))}
				</C.CategoryList>
			</Modal>}
		</AnimatePresence>
	);
};

export default CategoryManager;