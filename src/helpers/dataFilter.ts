import { Item } from "../types/TrackerContextTypes";

export const getCurrentMonth = () => {
	const now = new Date();

	return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
	const newList: Item[] = [];
	const [year, month] = date.split("-");

	for (const i in list) {
		if (new Date(list[i].created_at).getFullYear() == parseInt(year) &&
            new Date(list[i].created_at).getMonth() + 1 == parseInt(month)) {
			newList.push(list[i]);
		}
	}

	return newList;
};

export const formatDate = (date: Date): string => {
	const convertData = new Date(date);
	const year = convertData.getFullYear();
	const month = convertData.getMonth() + 1;
	const day = convertData.getDate();

	return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

export const formatCurrentMonth = (currentMonth: string) => {
	const [year, month] = currentMonth.split("-");
	const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	return `${months[parseInt(month) - 1]} de ${year}`;
};

const addZeroToDate = (n: number): string => {
	return n < 10 ? `0${n}` : `${n}`;
};