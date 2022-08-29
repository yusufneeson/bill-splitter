import { useState } from "react";
import { useCalcContext } from "../../context/calc.context";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import style from "./tip.module.css";

function Tip() {
	const { state, tipChange } = useCalcContext();
	const [customTip, setCustomTip] = useState("");
	const provideTips = [5, 10, 15, 25, 50];

	const customTipChange = (e) => {
		setCustomTip(e.target.value);
		tipChange(e);
	};

	return (
		<div className={style.tip}>
			<span className={style.text}>Select Tip %</span>
			<div className={style.buttons}>
				{provideTips.map((t) => (
					<Button key={t}>{t}%</Button>
				))}
				<TextField
					type="number"
					placeholder="Custom"
					value={customTip}
					onChange={customTipChange}
				/>
			</div>
		</div>
	);
}

export default Tip;
