import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../slices/venueSlice";

const Venue = () => {
	const venueItems = useSelector((state) => state.venue);
	const dispatch = useDispatch();

	const handleIncrement = (index) => {
		if (venueItems[index].quantity > 0) {
			dispatch(decrementQuantity(index));
		}
	};

	const handleDecrement = (index) => {
		dispatch(incrementQuantity(index));
	};

	const calculateTotalCost = (section) => {
		if (section === "venue") {
			return venueItems.reduce((acc, item) => {
				return (acc += item.cost * item.quantity);
			}, 0);
		}
	};

	const venueTotalCost = calculateTotalCost("venue");

	const remainingAuditoriumQuantity =
		3 -
		venueItems.find(
			(item) => item.name === "Auditorium Hall (Capacity:200)"
		).quantity;

	return (
		<div className="container" id="venue">
			<h2 className="text-center mt-4 mb-4">Venue Room Selectionss</h2>
			<div className="row mb-5 mt-5">
				{venueItems &&
					venueItems.map((item, index) => (
						<div className="col-md-3 mb-4" key={index}>
							<div className="card">
								<img
									src={item.img}
									className="card-img-top"
									alt={item.name}
								/>
								<div className="card-body">
									<h5 className="card-title mb-4">
										{item.name}
									</h5>
									<p className="text-center">${item.cost}</p>
									{venueItems[index].name ===
									"Auditorium Hall (Capacity:200)" ? (
										<div className="quantity-controller d-flex mx-auto">
											<button
												disabled={
													venueItems[index]
														.quantity === 0
												}
												className="btn btn-primary"
												onClick={() =>
													handleIncrement(index)
												}
											>
												-
											</button>
											<span className="form-control ms-2 me-2 text-center">
												{venueItems[index].quantity > 0
													? `${venueItems[index].quantity}`
													: "0"}
											</span>
											<button
												className="btn btn-primary"
												onClick={() =>
													handleDecrement(index)
												}
												disabled={
													remainingAuditoriumQuantity ===
													0
												}
											>
												+
											</button>
										</div>
									) : (
										<div className="quantity-controller d-flex mx-auto">
											<button
												className="btn btn-primary"
												onClick={() =>
													handleIncrement(index)
												}
												disabled={
													venueItems[index]
														.quantity === 0
												}
											>
												-
											</button>
											<span className="form-control ms-2 me-2 text-center">
												{venueItems[index].quantity > 0
													? ` ${venueItems[index].quantity}`
													: "0"}
											</span>
											<button
												className="btn btn-primary"
												onClick={() =>
													handleDecrement(index)
												}
												disabled={
													venueItems[index]
														.quantity === 10
												}
											>
												+
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
			</div>
			<div className="btn btn-outline-secondary text-center mx-auto d-block">
				{`Total Costs: $${venueTotalCost}`}
			</div>
		</div>
	);
};

export default Venue;
