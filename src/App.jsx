import { useState } from "react";
import Home from "./components/Home";
import ConferenceEvent from "./components/ConferenceEvent";

const App = () => {
	const [showVenue, setShowVenue] = useState(false);

	return (
		<>
			<Home getStared={setShowVenue} />
			<div
				className={`event-list-container ${showVenue ? "visible" : ""}`}
			>
				<ConferenceEvent />
			</div>
		</>
	);
};

export default App;
