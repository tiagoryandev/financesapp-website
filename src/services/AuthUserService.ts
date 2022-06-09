import api from "../api";
import statusMessages from "../config/statusMessages";
import { ResponseLogin, ResponseRegister } from "../types/AuthContextTypes";

export type getLoginProps = {
    email: string;
    password: string;
};

export type getRegisterProps = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	confirm_password: string;
};

export const getLogin = async ({ email, password }: getLoginProps) => {
	try {
		const response = await api.post<ResponseLogin>("/auth", {
			email,
			password
		});

		localStorage.setItem("@finances-app:token", `${response.data.token}`);
		api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

		return {
			status: response.data.status,
			code: response.data.code,
			message: statusMessages[response.data.code],
			token: response.data.token,
			user: response.data.user
		};
	} catch(error: any) {
		return {
			status: error.response.data.status,
			code: error.response.data.code,
			message: statusMessages[error.response.data.code]
		};
	}
};

export const getValidation = ({ first_name, last_name, email, password, confirm_password }: getRegisterProps) => {
	let validated = false;

	if (!first_name.length || !last_name.length || !email.length || !password.length || !confirm_password.length) 
		return {
			validated,
			message: "Você precsisa preencher todos os campos para realizar o cadastro."
		};

	if (first_name.length < 2 || first_name.length > 32 || last_name.length < 2 || last_name.length > 32)
		return {
			validated,
			message: "Você não pode escrever seu primeiro ou segundo nome com menos de 2 letras ou mais de 32 letras."
		};

	if (password !== confirm_password)
		return {
			validated,
			message: "Verifique se sua senha está igual a senha de confirmação para realizar o cadastro."
		};

	validated = true;

	return {
		validated
	};
};

export const getRegister = async ({ first_name, last_name, email, password }: getRegisterProps) => {
	try {
		const response = await api.post<ResponseRegister>("/users", {
			first_name, 
			last_name,
			email,
			password
		});

		return {
			status: response.data.status,
			code: response.data.code,
			message: statusMessages[response.data.code],
			user: response.data.user
		};
	} catch(error: any) {
		return {
			status: error.response.data.status,
			code: error.response.data.code,
			message: statusMessages[error.response.data.code]
		};
	}
};