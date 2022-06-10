import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdPerson, MdPersonSearch, MdEmail, MdVpnKey, MdRemoveRedEye } from "react-icons/md";

import * as C from "./styles";
import LogoMark from "../../components/LogoMark";
import ButtonAuth from "../../components/ButtonAuth";
import CheckBoxTerms from "../../components/CheckBoxTerms";
import Footer from "../../components/Footer";
import { NotifyContext } from "../../contexts/NotifyContext";
import { AuthContext } from "../../contexts/AuthContext";
import { getRegisterProps, getValidation, getRegister } from "../../services/AuthUserService";

const Register: React.FC = () => {
	const navigate = useNavigate();
	const { setNotify } = useContext(NotifyContext);
	const { setUpdating } = useContext(AuthContext);
	const { register, handleSubmit } = useForm<getRegisterProps>();

	const [disable] = useState(false);
	const [viewPass, setViewPass] = useState(false);
	const [viewPassConfirm, setViewPassConfirm] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false);

	useEffect(() => {
		document.title = "Registrar | Finances App";
	}, []);

	const onSubmit: SubmitHandler<getRegisterProps> = async (values) => {
		const isValidate = getValidation(values);

		if (!isValidate?.validated) {
			return setNotify({
				content: `${isValidate?.message}`,
				type: "error",
				timer: 5
			});
		}

		if (!termsChecked) {
			return setNotify({
				content: "Você precisa concordar com os Termos de Serviço para realizar o seu cadastro.",
				type: "error",
				timer: 5
			});
		}

		setUpdating(true);

		const { code, message } = await getRegister(values);

		setUpdating(false);

		if (code == "USER_CREATED") {
			setNotify({
				content: "Sua conta foi cadastrada com sucesso. Você será redirecionado para a pagina de autenticação em 3 segundos.",
				type: "accept",
				timer: 3
			});

			return setTimeout(() => navigate("/login"), 3000);
		} else {
			setNotify({
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
				<h1>Register</h1>
				<C.DobleInputs>
					<C.Input>
						<MdPerson />
						<input
							{...register("first_name")}
							className={disable ? "disable" : ""}
							type="text"
							placeholder="Primeiro Nome"
							autoFocus={true}
						/>
					</C.Input>
					<C.Input>
						<MdPersonSearch />
						<input
							{...register("last_name")}
							className={disable ? "disable" : ""}
							type="text"
							placeholder="Segundo Nome"
							autoFocus={true}
						/>
					</C.Input>
				</C.DobleInputs>
				<C.Input>
					<MdEmail />
					<input
						{...register("email")}
						className={disable ? "disable" : ""}
						type="email"
						placeholder="Endereço de E-mail"
						autoFocus={true}
					/>
				</C.Input>
				<C.Input>
					<MdVpnKey />
					<input
						{...register("password")}
						type={viewPass ? "text" : "password"}
						placeholder="Senha"
						autoFocus={true}
					/>
					<MdRemoveRedEye 
						className={viewPass ? "open" : ""}
						onClick={() => setViewPass(!viewPass)} 
					/>
				</C.Input>
				<C.Input>
					<MdVpnKey />
					<input
						{...register("confirm_password")}
						className={disable ? "disable" : ""}
						type={viewPassConfirm ? "text" : "password"}
						placeholder="Confirmar Senha"
						autoFocus={true}
					/>
					<MdRemoveRedEye 
						className={viewPassConfirm ? "open" : ""}
						onClick={() => setViewPassConfirm(!viewPassConfirm)} 
					/>
				</C.Input>
				<CheckBoxTerms 
					checked={termsChecked}
					setChecked={setTermsChecked}
				/>
				<ButtonAuth disabled={disable} title="Registrar" />
				<div className="separator"></div>
				<div className="redirect-link" onClick={() => navigate("/login")}>Já possui uma conta?</div>
			</C.Modal>
			<Footer />
		</C.Container>
	);
};

export default Register;