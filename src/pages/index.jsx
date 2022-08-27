import Head from "next/head";
import Box from "../components/Box/Box";
import Dollar from "../components/Svgs/dollar";
import Person from "../components/Svgs/person";
import TextField from "../components/TextField/TextField";
import Tip from "../components/Tip/Tip";
import HomeLayout from "../layouts/home";

export default function Home() {
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
			<HomeLayout>
				<Box>
					<div>
						<TextField
							icon={<Dollar />}
							label="Bill"
							type="number"
						/>
						<Tip />
						<TextField
							icon={<Person />}
							label="Number of People"
							type="number"
						/>
					</div>
					<Box bg="green" />
				</Box>
			</HomeLayout>
		</>
	);
}
