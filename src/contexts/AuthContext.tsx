import React, { useState, useEffect, createContext } from "react";
import { AnimatePresence } from "framer-motion";

import api from "../api";
import { ProviderProps, AuthContextType, User } from "../types/AuthContextTypes";
import Loading from "../components/Loading";
import Updating from "../components/Updating";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [updating, setUpdating] = useState(false);
	const isAuthenticated = !!user;

	useEffect(() => {
		(async () => {
			const token = localStorage.getItem("@finances-app:token");

			if (token) {
				api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

				try {
					const response = await api.get("/users/@me");
					setUser(response.data.user);
				} catch (error) {
					localStorage.removeItem("@finances-app:token");
					api.defaults.headers.common["Authorization"] = "";
				}
			}

			setLoading(false);
		})();
	}, []);

	return (
		<AnimatePresence>
			{loading ? <Loading /> :
				<AuthContext.Provider value={{
					user,
					setUser,
					isAuthenticated,
					updating,
					setUpdating
				}}>
					<AnimatePresence>
						{updating && <Updating />}
					</AnimatePresence>
					{children}
				</AuthContext.Provider>}
		</AnimatePresence>
	);
};