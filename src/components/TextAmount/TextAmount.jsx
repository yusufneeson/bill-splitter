import style from "./textamount.module.css";

function TextAmount(props) {
	const { text, amount } = props;
	return (
		<div className={style.container}>
			<div>
				<div className={style.texttitle}>{text}</div>
				<div className={style.textdesc}>/ person</div>
			</div>
			<div className={style.amount}>${amount}</div>
		</div>
	);
}

export default TextAmount;
