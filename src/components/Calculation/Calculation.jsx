import { useCalcContext } from "../../context/calc.context";
import Button from "../Button/Button";
import TextAmount from "../TextAmount/TextAmount";
import style from "./calculation.module.css";

function Calculation() {
	const { state } = useCalcContext();

	return (
		<div className={style.calc}>
			<div className={style.amounter}>
				<TextAmount text="Tip Amount" amount={state.tipamount} />
				<TextAmount text="Total" amount={state.total} />
			</div>
			<Button state="disabled">RESET</Button>
		</div>
	);
}

export default Calculation;
