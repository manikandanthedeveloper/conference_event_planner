import { useSelector, useDispatch } from "react-redux";
import { addonsIncrement, addonsDecrement } from "../slices/addonsSlice";

const Addons = () => {
	const addonsItems = useSelector((state) => state.addons);
	const dispatch = useDispatch();

	const handleIncrement = (index) => {
		dispatch(addonsIncrement(index));
	};

	const handleDecrement = (index) => {
		if (addonsItems[index].quantity > 0) {
			dispatch(addonsDecrement(index));
		}
	};

	const calculateTotalCost = () => {
		return addonsItems.reduce((acc, item) => {
			return (acc += item.quantity * item.cost);
		}, 0);
	};

	const addonsTotalCost = calculateTotalCost();

	return (
		<div className="container" id="addons">
			<h2 className="text-center mt-4 mb-4">Addons</h2>
			<div className="row mb-5 mt-5">
				{addonsItems &&
					addonsItems.map((item, index) => (
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
									<div className="quantity-controller d-flex mx-auto">
										<button
											disabled={
												addonsItems[index].quantity ===
												0
											}
											className="btn btn-primary"
											onClick={() =>
												handleDecrement(index)
											}
										>
											-
										</button>
										<span className="form-control ms-2 me-2 text-center">
											{addonsItems[index].quantity > 0
												? `${addonsItems[index].quantity}`
												: "0"}
										</span>
										<button
											className="btn btn-primary"
											onClick={() =>
												handleIncrement(index)
											}
										>
											+
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className="btn btn-outline-secondary text-center mx-auto d-block">
				{`Total Costs: $${addonsTotalCost}`}
			</div>
		</div>
	);
};

export default Addons;
