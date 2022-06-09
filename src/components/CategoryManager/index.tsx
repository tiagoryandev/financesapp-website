import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { MdDelete } from "react-icons/md";

import * as C from "./styles";
import Modal from "../Modal";
import { TrackerContext } from "../../contexts/TrackerContext";

type Props = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoryManager: React.FC<Props> = ({ isOpen, setOpen }) => {
	const { categories } = useContext(TrackerContext);

	return (
		<AnimatePresence>
			{isOpen && <Modal
				isOpen={isOpen}
				setOpen={setOpen}
			>
				<C.Title>Minhas Categorias</C.Title>

				<C.Header>Criar uma Categoria</C.Header>

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