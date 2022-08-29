import { CalcProvider } from "../context/calc.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<CalcProvider>
			<Component {...pageProps} />
		</CalcProvider>
	);
}

export default MyApp;
