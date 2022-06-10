import React from "react";
import { ThemeProvider } from "styled-components";

import { DarkMode } from "./themes";
import { NotifyProvider } from "./contexts/NotifyContext";
import { AuthProvider } from "./contexts/AuthContext";
import { TrackerProvider } from "./contexts/TrackerContext";
import RouterManager from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={DarkMode}>		
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