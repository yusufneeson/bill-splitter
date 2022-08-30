import { useEffect, useState } from "react";
import { useCalcContext } from "../../context/calc.context";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import style from "./tip.module.css";

function Tip() {
	const { state, tipChange } = useCalcContext();
	const [btnTip, setBtnTip] = useState(null);
	const [customTip, setCustomTip] = useState("");
	const provideTips = [5, 10, 15, 25, 50];

	useEffect(() => {
		if (Number(state.tip) < 1) {
			setBtnTip(null);
			setCustomTip("");
		}
	}, [state.tip]);

	const customTipChange = (e) => {
		setCustomTip(e.target.value);
		setBtnTip(null);
		tipChange(e);
	};

	const handleBtnClick = (e) => {
		setBtnTip(e.target.value);
		setCustomTip("");
		tipChange(e);
	};

	return (
		<div className={style.tip}>
			<span className={style.text}>Select Tip %</span>
			<div className={style.buttons}>
				{provideTips.map((t) => (
					<Button
						key={t}
						value={t}
						onClick={handleBtnClick}
						state={btnTip == t ? "active" : "normal"}
					>
						{t}%
					</Button>
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
