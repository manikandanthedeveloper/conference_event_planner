import Aboutus from "./Aboutus";

const Home = ({ getStared }) => {
	const handleGetStarted = () => {
		getStared(true);
	};

	return (
		<div className="home-page vh-100 d-flex align-items-center">
			<div className="main-event">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-5 d-flex flex-column align-items-center justify-content-center gap-2 text-center ps-5 pe-5">
							<h1 className="text-center">
								Conference Expense Planner
							</h1>
							<p className="fs-4">
								Plan your next major event with us!
							</p>
							<button
								onClick={() => handleGetStarted()}
								className="btn btn-warning"
							>
								Get Started
							</button>
						</div>

						<div className="col-md-7">
							<Aboutus />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
