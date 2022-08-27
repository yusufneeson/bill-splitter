import Logo from "../components/Svgs/Logo";
import style from "./home.module.css";

function HomeLayout({ children }) {
	return (
		<div className={style.layout}>
			<nav className={style.logo}>
				<a href="/">
					<Logo />
				</a>
			</nav>
			<section className={style.home}>{children}</section>
		</div>
	);
}

export default HomeLayout;
