import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import style from "./tip.module.css";

function Tip() {
	return (
		<div className={style.tip}>
			<span className={style.text}>Select Tip %</span>
			<div className={style.buttons}>
				<Button>5%</Button>
				<Button>10%</Button>
				<Button>15%</Button>
				<Button>25%</Button>
				<Button>50%</Button>
				<TextField placeholder="Custom" />
			</div>
		</div>
	);
}

export default Tip;
