import style from "./button.module.css";

function Button(props) {
	const { children } = props;
	return (
		<button className={style.button} {...props}>
			{children}
		</button>
	);
}

export default Button;
