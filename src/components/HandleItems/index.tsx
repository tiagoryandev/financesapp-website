import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowLeft, MdArrowRight, MdCategory, MdAddCircleOutline, MdOutlineMoreVert } from "react-icons/md";

import * as C from "./styles";
import CategoryManager from "../CategoryManager";
import ItemManager from "../ItemManager";
import { TrackerContext } from "../../contexts/TrackerContext";
import { formatCurrentMonth } from "../../helpers/dataFilter";

const HandleItems: React.FC = () => {
	const { currentMonth, setCurrentMonth } = useContext(TrackerContext);
	const [openCreateCategory, setOpenCreateCategory] = useState(false);
	const [openCreateItem, setOpenCreateItem] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const handleMonth = (to: "prev" | "next") => {
		const [year, month] = currentMonth.split("-");
		const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

		currentDate.setMonth(to == "prev" ? currentDate.getMonth() - 1 : currentDate.getMonth() + 1);
		setCurrentMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
	};

	return (
		<>

			<CategoryManager isOpen={openCreateCategory} setOpen={setOpenCreateCategory} />
			<ItemManager isOpen={openCreateItem} setOpen={setOpenCreateItem} />
			<C.Container>
				<C.HandleMonth>
					<MdArrowLeft size={32} onClick={() => handleMonth("prev")} />
					<span>{formatCurrentMonth(currentMonth)}</span>
					<MdArrowRight size={32} onClick={() => handleMonth("next")} />
				</C.HandleMonth>
				<C.ButtonOption onClick={() => setOpenCreateItem(true)}>
					<MdAddCircleOutline size={32} />
				</C.ButtonOption>
				<C.ButtonOption onClick={() => setOpenCreateCategory(true)}>
					<MdCategory size={32} />
				</C.ButtonOption>
				<C.ButtonFixed>
					<AnimatePresence>
						{openMenu && <motion.div
							initial={{
								translateX: "100px",
							}}
							animate={{
								translateX: "0px"
							}}
							exit={{
								translateX: "100px"
							}}
							transition={{
								type: "spring",
								duration: 0.5
							}}
						>
							<C.ButtonFixedOption onClick={() => setOpenMenu(false)}>
								<MdAddCircleOutline size={32} />
							</C.ButtonFixedOption>
							<C.ButtonFixedOption onClick={() => {
								setOpenCreateCategory(true);
								setOpenMenu(false);
							}}>
								<MdCategory size={32} />
							</C.ButtonFixedOption>
						</motion.div>}
					</AnimatePresence>
					<C.ButtonFixedOption onClick={() => setOpenMenu(!openMenu)}>
						<MdOutlineMoreVert size={30}/>
					</C.ButtonFixedOption>
				</C.ButtonFixed>
			</C.Container>
		</>
	);
};

export default HandleItems;