import React from "react";

export type ProviderProps = {
    children: React.ReactNode;
};

export type AuthContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isAuthenticated: boolean;
    updating: boolean;
    setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
};

export type User = {
    id: string;
    first_name: string;
    last_name: string;
    role: "USER" | "ADMIN";
    email: string;
    is_checked: string;
    created_at: Date;
    updated_at: Date;
};

export type ResponseLogin = {
    status: number;
    code: string;
    message: string;
    token?: string;
    user?: User;
}

export type ResponseRegister = {
    status: number;
    code: string;
    message: string;
    user?: User;
}