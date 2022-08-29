import { createContext, useContext, useReducer } from "react";

const defaultValue = {
	bill: "",
	tip: "",
	people: "",
	tipamount: "0.00",
	total: "0.00",
};

const CalcContext = createContext();

function calcReducer(state, action) {
	switch (action.type) {
		case "bill": {
			return {
				...state,
				bill: action.bill,
				tipamount: action.tipamount,
				total: action.total,
			};
		}
		case "tip": {
			return {
				...state,
				tip: action.tip,
				tipamount: action.tipamount,
				total: action.total,
			};
		}
		case "people": {
			return {
				...state,
				people: action.people,
				tipamount: action.tipamount,
				total: action.total,
			};
		}
	}
}

function CalcProvider({ children }) {
	const [state, dispatch] = useReducer(calcReducer, defaultValue);

	const billChange = (e) => {
		let bill = e.target.value;
		let total = `0.00`;
		let tipamount = `0.00`;
		let people = Number(state.people) < 1 ? 0 : state.people;
		let tip = Number(state.tip) < 1 ? 0 : state.tip;

		if (people && tip) {
			tipamount = Number(((bill * tip) / 100 / people).toFixed(2));
			total = Number((bill / people + tipamount).toFixed(2));
		}

		dispatch({ type: "bill", bill, tipamount, total });
	};

	const peopleChange = (e) => {
		let people = e.target.value;
		let total = `0.00`;
		let tipamount = `0.00`;
		let bill = Number(state.bill) < 1 ? 0 : state.bill;
		let tip = Number(state.tip) < 1 ? 0 : state.tip;

		if (bill && tip && Number(people) > 0) {
			tipamount = Number(((bill * tip) / 100 / people).toFixed(2));
			total = Number((bill / people + tipamount).toFixed(2));
		}

		dispatch({ type: "people", people, tipamount, total });
	};

	const tipChange = (e) => {
		let tip = e.target.value;
		let total = `0.00`;
		let tipamount = `0.00`;
		let bill = Number(state.bill) < 1 ? 0 : state.bill;
		let people = Number(state.people) < 1 ? 0 : state.people;

		if (bill && people) {
			tipamount = Number(((bill * tip) / 100 / people).toFixed(2));
			total = Number((bill / people + tipamount).toFixed(2));
		}

		dispatch({ type: "tip", tip, tipamount, total });
	};

	return (
		<CalcContext.Provider
			value={{ state, dispatch, billChange, peopleChange, tipChange }}
		>
			{children}
		</CalcContext.Provider>
	);
}

function useCalcContext() {
	return useContext(CalcContext);
}

export { CalcProvider, useCalcContext };
