import Logo from "../components/Svgs/Logo";
import style from "./home.module.css";
import Link from "next/link";

function HomeLayout({ children }) {
	return (
		<div className={style.layout}>
			<header className={style.logo}>
				<Link href="/">
					<a href="/">
						<Logo />
					</a>
				</Link>
			</header>
			<section className={style.home}>{children}</section>
		</div>
	);
}

export default HomeLayout;
