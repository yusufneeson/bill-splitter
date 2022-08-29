import Box from "../components/Box/Box";
import Calculation from "../components/Calculation/Calculation";
import Dollar from "../components/Svgs/dollar";
import Person from "../components/Svgs/person";
import TextField from "../components/TextField/TextField";
import Tip from "../components/Tip/Tip";
import { useCalcContext } from "../context/calc.context";
import HomeLayout from "../layouts/home";

export default function Home() {
	const { state, billChange, peopleChange } = useCalcContext();

	return (
		<HomeLayout>
			<Box>
				<div style={{ padding: "1.4rem 0" }}>
					<TextField
						icon={<Dollar />}
						label="Bill"
						type="number"
						value={state.bill}
						onChange={billChange}
					/>
					<Tip />
					<TextField
						icon={<Person />}
						label="Number of People"
						type="number"
						value={state.people}
						onChange={peopleChange}
					/>
				</div>
				<Box bg="green">
					<Calculation />
				</Box>
			</Box>
		</HomeLayout>
	);
}
