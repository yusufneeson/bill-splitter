import Button from "../Button/Button";
import TextAmount from "../TextAmount/TextAmount";
import style from "./calculation.module.css";

function Calculation() {
	return (
		<div className={style.calc}>
			<TextAmount text="Tip Amount" amount="0.00" />
			<TextAmount text="Total" amount="0.00" />
			<Button state="disabled">RESET</Button>
		</div>
	);
}

export default Calculation;
