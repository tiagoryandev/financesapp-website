import React from "react";

export type ProviderProps = {
    children: React.ReactNode;
};

export type TrackerContextType = {
    items: Item[];
    itemsFiltered: Item[];
    categories: Category[];
    currentMonth: string;
    setCurrentMonth: React.Dispatch<React.SetStateAction<string>>;
};

export type Item = {
    id: number;
    user_id: string;
    title: string;
    note: string;
    value: number;
    category_id: number;
    created_at: Date;
    updated_at: Date;
};

export type Category = {
    id: number;
    user_id: string;
    name: string;
    type: "income" | "expense";
    created_at: Date;
    updated_at: Date;
};