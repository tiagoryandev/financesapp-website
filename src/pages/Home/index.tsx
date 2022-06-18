import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCalculate } from "react-icons/md";

import * as C from "./styles";
import Navbar from "../../components/Navbar";
import ButtonAuth from "../../components/ButtonAuth";
import Image from "../../assets/dashboard.png";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
	const navigate = useNavigate();

	return (
		<C.Container>
			<Navbar />
			<C.Header>
				<div className="content">
					<h1>O Serviço para Gerenciar suas Receitas e Despesas.</h1>
					<ButtonAuth title="Começar Agora" disabled={false} onClick={() => navigate("/dashboard")} />
				</div>
				<img src={Image} alt="Imagem de exemplo do painel." />
			</C.Header>
			<div className="separator"></div>
			<C.About>
				<div className="content">
					<h1>Quem Somos?</h1>
					<p>Somos um serviço que tem como objetivo principal, te ajudar a gerenciar suas despesas e receitas mensais. Fornecemos um painel para informar suas estatísticas monetárias.</p>
				</div>
				<MdCalculate />
			</C.About>
			<div className="separator"></div>
			<Footer />
		</C.Container>
	);
};

export default Home;