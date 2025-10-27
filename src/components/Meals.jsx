import { useDispatch, useSelector } from "react-redux";
import { toggleMeals } from "../slices/mealsSlice";

const Meals = ({
	numberofPoeple,
	setNumberofPeople,
	showItems,
	setShowItems,
}) => {
	const mealsItems = useSelector((state) => state.meals);
	const dispatch = useDispatch();

	const handleToggle = (index) => {
		if (numberofPoeple === 0) return;
		dispatch(toggleMeals(index));
	};

	const calculateTotalCost = () => {
		return mealsItems.reduce(
			(acc, item) =>
				(acc += item.selected ? item.cost * numberofPoeple : 0),
			0
		);
	};

	const totalCost = calculateTotalCost();

	const handleOnChange = (num) => {
		setNumberofPeople(num);
	};

	return (
		<div className="container" id="meals">
			<h2 className="text-center mt-4 mb-4">Meals</h2>
			<div className="row">
				<div className="col-md-4 mx-auto p-5">
					<div className="mb-3">
						<label
							htmlFor="exampleFormControlInput1"
							className="form-label"
						>
							Number of people
						</label>
						<input
							type="number"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="0"
							min={1}
							value={numberofPoeple}
							onChange={(e) =>
								handleOnChange(parseInt(e.target.value))
							}
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Cost</th>
								<th scope="col">Selected</th>
							</tr>
						</thead>
						<tbody>
							{mealsItems &&
								mealsItems.map((item, index) => (
									<tr key={index}>
										<th scope="row">{index}</th>
										<td>{item.name}</td>
										<td>{item.cost}</td>
										<td>
											<div className="d-flex gap-3">
												{item.selected ? (
													<button
														className="btn btn-warning"
														onClick={() =>
															handleToggle(index)
														}
													>
														Remove
													</button>
												) : (
													<button
														className="btn btn-primary"
														onClick={() =>
															handleToggle(index)
														}
													>
														Select
													</button>
												)}
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					<div className="btn btn-outline-secondary text-center mx-auto d-block mt-5">
						{`Total Costs: $${totalCost}`}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 mt-4 mb-4">
					<button
						className="btn btn-warning mx-auto d-flex"
						type="button"
						onClick={() => setShowItems(!showItems)}
					>
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Meals;
