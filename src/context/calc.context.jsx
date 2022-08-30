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
			};
		}
		case "tip": {
			return {
				...state,
				tip: action.tip,
			};
		}
		case "people": {
			return {
				...state,
				people: action.people,
			};
		}
		case "total": {
			return {
				...state,
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
		calcTotal("bill", bill);
		dispatch({ type: "bill", bill });
	};

	const peopleChange = (e) => {
		let people = e.target.value;
		calcTotal("people", people);
		dispatch({ type: "people", people });
	};

	const tipChange = (e) => {
		let tip = e.target.value;
		calcTotal("tip", tip);
		dispatch({ type: "tip", tip });
	};

	const resetCalc = () => {
		dispatch({ type: "total", tipamount: "0.00", total: "0.00" });
		dispatch({ type: "tip", tip: "" });
		dispatch({ type: "people", people: "" });
		dispatch({ type: "bill", bill: "" });
	};

	const calcTotal = (type, current) => {
		const typeCast = {
			tip: ["bill", "people"],
			people: ["bill", "tip"],
			bill: ["people", "tip"],
		};

		const theType = typeCast[type];

		let total = `0.00`;
		let tipamount = `0.00`;
		let key1 = Number(state[theType[0]]) < 1 ? 0 : state[theType[0]];
		let key2 = Number(state[theType[1]]) < 1 ? 0 : state[theType[1]];

		let bill = type == "bill" ? current : key1;
		let tip = type == "tip" ? current : key2;
		let people = type == "people" ? current : type == "tip" ? key2 : key1;

		if (key1 && key2 && Number(people) > 0) {
			tipamount = Number(((bill * tip) / 100 / people).toFixed(2));
			total = Number((bill / people + tipamount).toFixed(2));
		}

		dispatch({ type: "total", tipamount, total });
	};

	return (
		<CalcContext.Provider
			value={{
				state,
				dispatch,
				billChange,
				peopleChange,
				tipChange,
				resetCalc,
			}}
		>
			{children}
		</CalcContext.Provider>
	);
}

function useCalcContext() {
	return useContext(CalcContext);
}

export { CalcProvider, useCalcContext };
