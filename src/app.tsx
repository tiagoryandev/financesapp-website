import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { LightMode, DarkMode, Themes } from "./themes";
import { NotifyProvider } from "./contexts/NotifyContext";
import { AuthProvider } from "./contexts/AuthContext";
import { TrackerProvider } from "./contexts/TrackerContext";
import RouterManager from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
	const [theme, setTheme] = useState<Themes>("dark");

	useEffect(() => {
		const themeConfig = localStorage.getItem("@finances-app:theme") as Themes;

		if (themeConfig) {
			setTheme(themeConfig);
		}
	}, []);

	return (
		<ThemeProvider theme={theme === "light" ? LightMode : DarkMode}>		
			<NotifyProvider>
				<AuthProvider>
					<TrackerProvider>
						<RouterManager />
					</TrackerProvider>
				</AuthProvider>
			</NotifyProvider>
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;