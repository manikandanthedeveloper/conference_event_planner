import { useSelector } from "react-redux";

const TotalCost = ({ numberofPoeple }) => {
	const venueItems = useSelector((state) => state.venue);
	const addonsItems = useSelector((state) => state.addons);
	const mealItems = useSelector((state) => state.meals);

	const getItemsFromTotalCost = () => {
		const items = [];

		venueItems.forEach((item) => {
			if (item.quantity > 0) items.push({ ...item, type: "venue" });
		});
		addonsItems.forEach((item) => {
			if (item.quantity > 0) items.push({ ...item, type: "addons" });
		});

		mealItems.forEach((item) => {
			if (item.selected) items.push({ ...item, type: "meals" });
		});

		return items;
	};

	const items = getItemsFromTotalCost();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mt-4 mb-4">Total cost for the event</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Unit Cost</th>
								<th scope="col">Quantity</th>
								<th scope="col">Total Cost</th>
							</tr>
						</thead>
						<tbody>
							{items ? (
								items.map((item, index) => (
									<tr key={index}>
										<th scope="row">{item.name}</th>
										<td>${item.cost}</td>
										<td>
											{item.type === "meals" ||
											item.numberOfPeople
												? ` For ${numberofPoeple} people`
												: item.quantity}
										</td>
										<td>
											$
											{item.type === "meals" ||
											item.numberOfPeople
												? `${
														item.cost *
														numberofPoeple
												  }`
												: `${
														item.cost *
														item.quantity
												  }`}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td>No record found</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TotalCost;
