import Button from "../Button/Button";
import TextAmount from "../TextAmount/TextAmount";
import style from "./calculation.module.css";

function Calculation() {
	return (
		<div className={style.calc}>
			<div className={style.amounter}>
				<TextAmount text="Tip Amount" amount="0.00" />
				<TextAmount text="Total" amount="0.00" />
			</div>
			<Button state="disabled">RESET</Button>
		</div>
	);
}

export default Calculation;
