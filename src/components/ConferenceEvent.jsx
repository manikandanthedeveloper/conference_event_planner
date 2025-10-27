import { useState } from "react";
import Addons from "./Addons";
import Meals from "./Meals";
import Navbar from "./Navbar";
import Venue from "./Venue";
import TotalCost from "./TotalCost";

const ConferenceEvent = () => {
	const [showItems, setShowItems] = useState(false);
	const [numberofPoeple, setNumberofPeople] = useState(0);

	return (
		<>
			<Navbar showItems={showItems} setShowItems={setShowItems} />
			{!showItems ? (
				<>
					<Venue />
					<Addons />
					<Meals
						numberofPoeple={numberofPoeple}
						setNumberofPeople={setNumberofPeople}
						showItems={showItems}
						setShowItems={setShowItems}
					/>
				</>
			) : (
				<TotalCost numberofPoeple={numberofPoeple} />
			)}
		</>
	);
};

export default ConferenceEvent;
