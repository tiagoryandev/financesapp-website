import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdEmail, MdVpnKey, MdRemoveRedEye } from "react-icons/md";

import * as C from "./styles";
import LogoMark from "../../components/LogoMark";
import ButtonAuth from "../../components/ButtonAuth";
import Footer from "../../components/Footer";
import { NotifyContext } from "../../contexts/NotifyContext";
import { AuthContext } from "../../contexts/AuthContext";
import { getLogin, getLoginProps } from "../../services/AuthUserService";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const { setNotify } = useContext(NotifyContext);
	const { setUser, setUpdating } = useContext(AuthContext);
	const { register, handleSubmit } = useForm<getLoginProps>();

	const [viewPass, setViewPass] = useState(false);
	const [disable, setDisable] = useState(false);

	useEffect(() => {
		document.title = "Entrar | Finances App";
	}, []);

	const onSubmit: SubmitHandler<getLoginProps> = async ({ email, password }) => {
		if (!email.length || !password.length) {
			return setNotify({
				content: "Você precisa preencher todos os campos para realizar a autenticação.",
				type: "error",
				timer: 5
			});
		}

		setUpdating(true);
		setDisable(true);

		const { token, user, message } = await getLogin({ email, password });

		if (token && user) {
			setUpdating(false);
			setUser(user);

			return navigate("/");
		} else {
			setUpdating(false);
			setDisable(false);

			return setNotify({
				content: message,
				type: "error",
				timer: 3
			});
		}
	};

	return (
		<C.Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3
			}}
		>
			<LogoMark />
			<C.Modal onSubmit={handleSubmit(onSubmit)}>
				<h1>Login</h1>
				<C.Input>
					<MdEmail />
					<input
						{...register("email")}
						className={disable ? "disable" : ""}
						type="email"
						placeholder="Endereço de E-mail"
						autoFocus={true}
						disabled={disable}
					/>
				</C.Input>
				<C.Input>
					<MdVpnKey />
					<input
						{...register("password")}
						className={disable ? "disable" : ""}
						type={viewPass ? "text" : "password"}
						placeholder="Senha"
						autoFocus={true}
						disabled={disable}
					/>
					<MdRemoveRedEye 
						className={viewPass ? "open" : ""}
						onClick={() => setViewPass(!viewPass)} 
					/>
				</C.Input>
				<div className="redirect-link">Esqueceu sua Senha?</div>
				<ButtonAuth 
					disabled={disable}
					title="Entrar"
					type="submit"
				/>
				<div className="separator"></div>
				<div className="redirect-link" onClick={() => navigate("/register")}>Ainda não possui uma conta?</div>
			</C.Modal>
			<Footer />
		</C.Container>
	);
};

export default Login;