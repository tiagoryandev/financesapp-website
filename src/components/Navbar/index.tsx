import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MdCheck } from "react-icons/md";

import * as C from "./styles";
import Modal from "../Modal";
import { AuthContext } from "../../contexts/AuthContext";
import { TrackerContext  } from "../../contexts/TrackerContext";

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(AuthContext);
	const { setCategories, setItems } = useContext(TrackerContext);
	const [openProfile, setOpenProfile] = useState(false);

	const HandleLogout = () => {
		setItems([]);
		setCategories([]);
		setUser(null);

		localStorage.removeItem("@finances-app:token");

		navigate("/login");
	};

	return (
		<>
			<AnimatePresence>
				{openProfile && <Modal isOpen={openProfile} setOpen={setOpenProfile}>
					<C.Title>Sua Conta</C.Title>
					<C.UserInfo>
						<h1>{user?.first_name} {user?.last_name}<span className={user?.role === "ADMIN" ? "admin" : "user"}>{user?.role === "ADMIN" ? "Administrador" : "Usuário"}</span></h1>
						<div className="email">{user?.is_checked && <MdCheck size={20} />} {user?.email}</div>
						<C.ButtonLogout onClick={HandleLogout}>Sair da Conta</C.ButtonLogout>
					</C.UserInfo>
				</Modal>}
			</AnimatePresence>
			<C.Container>
				<C.LogoMark>
					<C.LogoIcon />
					<h1>Finances</h1>
				</C.LogoMark>
				<C.Options>
					<span onClick={() => setOpenProfile(!openProfile)}>
						{user?.first_name} {user?.last_name}
					</span>
				</C.Options>
			</C.Container>
		</>
	);
};

export default Navbar;