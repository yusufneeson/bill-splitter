import style from "./box.module.css";

function Box(props) {
	const { bg = "white", children } = props;
	return (
		<div className={`${style.box} ${bg ? style[`box${bg}`] : ""}`}>
			{children}
		</div>
	);
}

export default Box;
