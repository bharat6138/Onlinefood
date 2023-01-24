import React from "react";
import offers from "../../assets/img/offers.png";

const Offers = () => {
	return (
		<>
			<div>
				<div className="offer-section">
					<div className="container">
						<div className="py-5 d-flex align-items-center">
							<div>
								<h2 className="text-white">Offers for you</h2>
								<p className="h6 text-white">
									Explore top deals and offers exclusively for you!
								</p>
							</div>
							<div className="ml-auto">
								<img alt="#" src={offers} className="img-fluid offers_img" />
							</div>
						</div>
					</div>
				</div>
				{/* Tabs */}
				<div className="bg-white shadow-sm">
					<div className="container">
						<div className="bg-white">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
								<li className="nav-item" role="presentation">
									<a
										className="px-0 py-3 nav-link text-dark h6 border-0 mb-0 active"
										id="profile-tab"
										data-toggle="tab"
										href="#profile"
										role="tab"
										aria-controls="profile"
										aria-selected="false"
									>
										Payment offers/Coupons
									</a>
								</li>
								<li className="nav-item bottom-tab" role="presentation">
									<a
										className="px-0 py-3 nav-link text-dark h6 border-0 mb-0 ml-3"
										id="home-tab"
										data-toggle="tab"
										href="#home"
										role="tab"
										aria-controls="home"
										aria-selected="true"
									>
										Restaurant offers
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="tab-content" id="myTabContent">
						<div
							className="tab-pane fade py-4"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<h5 className="mb-1">No offers ()</h5>
							<p>All offers and deals, from restaurants near you</p>
						</div>
						<div
							className="tab-pane fade show active py-4"
							id="profile"
							role="tabpanel"
							aria-labelledby="profile-tab"
						>
							<h5 className="mb-3 mt-0">Available Coupons</h5>
							<div className="row">
								<div className="col-md-4 mb-3">
									<div className="bg-white shadow-sm rounded p-4">
										<p className="h6 mb-3">
											<span className="feather-home text-primary" />
											<span className="ml-3">SBI75</span>
										</p>
										<p className="font-weight-bold mb-2">
											Get 15% discount using SBI Credit Cards
										</p>
										<p className="mb-4">
											Use code SBI75 and get 15% discount up to Rs.75 on orders above
											Rs.400
										</p>
										<p>
											<a href="#" className="text-primary">
												+ MORE
											</a>
										</p>
										<a href="#" className="btn btn-outline-primary">
											COPY CODE
										</a>
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<div className="bg-white shadow-sm rounded p-4">
										<p className="h6 mb-3">
											<span className="feather-home text-primary" />
											<span className="ml-3">PAYZAPP100</span>
										</p>
										<p className="font-weight-bold mb-2">
											Get 15% discount using HDFC PayZapp Card
										</p>
										<p className="mb-4">
											Use code PAYZAPP100 &amp; get 15% discount up to Rs.100 on orders
											above Rs.250
										</p>
										<p>
											<a href="#" className="text-primary">
												+ MORE
											</a>
										</p>
										<a href="#" className="btn btn-outline-primary">
											COPY CODE
										</a>
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<div className="bg-white shadow-sm rounded p-4">
										<p className="h6 mb-3">
											<span className="feather-home text-primary" />
											<span className="ml-3">LP75</span>
										</p>
										<p className="font-weight-bold mb-2">
											Get flat cashback of Rs.75 using LazyPay
										</p>
										<p className="mb-4">
											Use code LP75 &amp; get flat cashback of Rs.75 on orders above Rs.250
											on first LazyPay
										</p>
										<p>
											<a href="#" className="text-primary">
												+ MORE
											</a>
										</p>
										<a href="#" className="btn btn-outline-primary">
											COPY CODE
										</a>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 mb-3">
									<div className="bg-white shadow-sm rounded p-4">
										<p className="h6 mb-3">
											<span className="feather-home text-primary" />
											<span className="ml-3">RUPAYFEST</span>
										</p>
										<p className="font-weight-bold mb-2">
											Get 30% discount using RuPay Cards
										</p>
										<p className="mb-4">
											Use code RUPAYFEST and get 30% discount up to Rs.100 on orders above
											Rs.199
										</p>
										<p>
											<a href="#" className="text-primary">
												+ MORE
											</a>
										</p>
										<a href="#" className="btn btn-outline-primary">
											COPY CODE
										</a>
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<div className="bg-white shadow-sm rounded p-4">
										<p className="h6 mb-3">
											<span className="feather-home text-primary" />
											<span className="ml-3">FCH50</span>
										</p>
										<p className="font-weight-bold mb-2">
											Get 20% cashback using Freecharge
										</p>
										<p className="mb-4">
											Use code FCH50 and get 20% cashback up to Rs.50 on transaction using
											Freecharge.
										</p>
										<p>
											<a href="#" className="text-primary">
												+ MORE
											</a>
										</p>
										<a href="#" className="btn btn-outline-primary">
											COPY CODE
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Offers;
