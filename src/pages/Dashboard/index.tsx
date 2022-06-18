import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

import * as C from "./styles";
import Navbar from "../../components/Navbar";
import GroupBox from "../../components/GroupBox";
import HandleItems from "../../components/HandleItems";
import TableItems from "../../components/TableItems";
import { AuthContext } from "../../contexts/AuthContext";
import { TrackerContext } from "../../contexts/TrackerContext";

const Dashboard: React.FC = () => {
	const { isAuthenticated } = useContext(AuthContext);
	const { itemsFiltered, categories } = useContext(TrackerContext);

	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	useEffect(() => {
		document.title = "Home | Finances App";
	}, []);

	useEffect(() => {
		let currentIncome = 0;
		let currentExpense = 0;

		for (const i in itemsFiltered) {
			const item = itemsFiltered[i];
			const categoryItem = categories.find(c => c.id === item.category_id);

			if (categoryItem?.type == "expense") {
				currentExpense += item.value;
			} else {
				currentIncome += item.value;
			}
		}

		setIncome(currentIncome);
		setExpense(currentExpense);
	}, [itemsFiltered]);

	return (
		<>
			<Navbar />
			<C.Container>
				<GroupBox income={income} expense={expense} />
				<HandleItems />
				<TableItems />
			</C.Container>
		</>
	);
};

export default Dashboard;