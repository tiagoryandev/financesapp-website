import React from "react";

import { NotificationContent } from "../components/Notification";

export type ProviderProps = {
    children: React.ReactNode;
};

export type NotifyContextType = {
    setNotify: (values: NotificationContent) => void;
};