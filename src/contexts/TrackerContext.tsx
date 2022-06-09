import React, { useState, useEffect, useContext, createContext } from "react";

import api from "../api";
import { AuthContext } from "./AuthContext";
import { TrackerContextType, ProviderProps, Item, Category } from "../types/TrackerContextTypes";
import { getCurrentMonth, filterListByMonth } from "../helpers/dataFilter";

export const TrackerContext = createContext({ } as TrackerContextType);

export const TrackerProvider = ({ children }: ProviderProps) => {
	const { isAuthenticated, setUpdating } = useContext(AuthContext);

	const [items, setItems] = useState<Item[]>([]);
	const [itemsFiltered, setItemsFiltered] = useState<Item[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

	useEffect(() => {
		(async () => {
			setUpdating(true);

			if (isAuthenticated) { 
				const itemsResponse = await api.get<{ items: Item[] }>("/items");
				const categoriesResponse = await api.get<{ categories: Category[] }>("/categories");

				setItems(itemsResponse.data.items);
				setCategories(categoriesResponse.data.categories);
			}

			setUpdating(false);
		})();
	}, [isAuthenticated]);

	useEffect(() => {
		setItemsFiltered(filterListByMonth(items, currentMonth));
	}, [items, currentMonth]);

	return (
		<TrackerContext.Provider value={{ 
			items,
			itemsFiltered,
			categories,
			currentMonth,
			setCurrentMonth
		}}>
			{children}
		</TrackerContext.Provider>
	);
};