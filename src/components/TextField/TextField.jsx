import style from "./textfield.module.css";

function TextField(props) {
	const { label, icon, type = "text", placeholder = "0" } = props;
	return (
		<div className={style.textField}>
			{label && <label className={style.label}>{label}</label>}
			<div className={`${icon ? style.formIcon : style.formBiasa}`}>
				{icon && <span className={style.icon}>{icon}</span>}
				<input
					className={style.input}
					type={type}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}

export default TextField;
