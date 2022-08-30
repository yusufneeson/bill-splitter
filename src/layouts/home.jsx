import Logo from "../components/Svgs/Logo";
import style from "./home.module.css";
import Link from "next/link";
import Head from "next/head";

function HomeLayout({ children }) {
	return (
		<>
			<Head>
				<title>Bill Splitter</title>
				<meta name="robots" content="follow, index" />
				<meta
					content="Bill Splitter using Next.js from Frontend Mentor Challenge created by Yusuf Neeson"
					name="description"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Yusuf Neeson" />
				<meta
					property="og:description"
					content="Bill Splitter using Next.js from Frontend Mentor Challenge created by Yusuf Neeson"
				/>
				<meta
					property="og:title"
					content="Bill Splitter - Yusuf Neeson"
				/>
				<meta name="twitter:site" content="@yusufneeson" />
				<meta
					name="twitter:title"
					content="Bill Splitter - Yusuf Neeson"
				/>
				<meta
					name="twitter:description"
					content="Bill Splitter using Next.js from Frontend Mentor Challenge created by Yusuf Neeson"
				/>
			</Head>

			<div className={style.layout}>
				<header className={style.logo}>
					<Link href="/">
						<a>
							<Logo />
						</a>
					</Link>
				</header>
				<section className={style.home}>{children}</section>
			</div>
		</>
	);
}

export default HomeLayout;
