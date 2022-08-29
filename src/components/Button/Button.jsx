import style from "./button.module.css";

function Button(props) {
	const { children, state = "normal" } = props;
	return (
		<button className={`${style.button} ${style[state]}`} {...props}>
			{children}
		</button>
	);
}

export default Button;
