import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";
import LogoMark from "../../components/LogoMark";
import Footer from "../../components/Footer";

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = "Página não Encontrada | Finances App";
	}, []);

	return (
		<C.Container>
			<LogoMark />
			<C.Content>
				<h1>Oops!</h1>
				<p>Você tentou busca uma página desconhecida, então enviamos você para cá.</p>
				<p>Caso queira voltar para o página inicial, <span onClick={() => navigate("/")}>clique aqui</span></p>
			</C.Content>
			<Footer />
		</C.Container>
	);
};

export default NotFound;