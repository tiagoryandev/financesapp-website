import React, { useState, createContext } from "react";

import { NotifyContextType, ProviderProps } from "../types/NotifyContextTypes";
import Notification, { NotificationContent } from "../components/Notification";

export const NotifyContext = createContext({ } as NotifyContextType);

export const NotifyProvider = ({ children }: ProviderProps) => {
	const [notifications, setNotifications] = useState<NotificationContent[]>([]);

	const setNotify = ({ content, type, timer }: NotificationContent) => {
		setNotifications([...notifications, {
			content,
			type,
			timer: timer || 3
		}]);
	};

	return (
		<NotifyContext.Provider value={{ setNotify }}>
			{notifications.map((notify, index) => 
				<Notification 
					key={index}
					type={notify.type}
					content={notify.content}
					timer={notify.timer || 3}
				/>
			)}
			{children}
		</NotifyContext.Provider>
	);
};