import React from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../../utils/useRestuarantMenu";
import { IMG_CDN_URL } from "./config";
import { SkeletonMenu, Skeletonimg } from "./Skeleton";

const ResturantMenu = () => {
	const { id } = useParams();
	console.log(id);
	const resturantList = useRestuarantMenu(id);

	return !resturantList ? (
		<div className="container position-relative">
			<div className="row">
				{Array(4)
					.fill("")
					.map((e, index) => (
						<div className="col-md-3 pb-3" key={index}>
							<div className="skeleton">
								<SkeletonMenu />
							</div>
						</div>
					))}
			</div>
		</div>
	) : (
		<div>
			<div className="offer-section py-4">
				<div className="container position-relative">
					<img
						alt="#"
						src={IMG_CDN_URL + resturantList?.cloudinaryImageId}
						className="restaurant-pic"
					/>
					<div className="pt-3 text-white">
						<h2 className="font-weight-bold">{resturantList?.name}</h2>
						<p className="text-white m-0">{resturantList?.cuisines?.join(", ")}</p>
						<p className="text-white m-0">
							{resturantList?.locality}, {resturantList?.city}
						</p>
						<div className="rating-wrap d-flex align-items-center mt-2">
							<ul className="rating-stars list-unstyled">
								<li>
									<i className="feather-star" />
									{resturantList?.avgRating}
								</li>
							</ul>
							<p className="label-rating text-white ml-2 small">
								({resturantList?.totalRatingsString})
							</p>
						</div>
					</div>
					<div className="pb-4">
						<div className="row">
							<div className="col-6 col-md-2">
								<p className="text-white-50 font-weight-bold m-0 small">
									Delivery Time
								</p>
								<p className="text-white m-0">{resturantList?.sla?.slaString}</p>
							</div>
							<div className="col-6 col-md-2">
								<p className="text-white-50 font-weight-bold m-0 small">Cost For Two</p>
								<p className="text-white m-0">₹ {resturantList?.costForTwo / 100}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Menu */}
			<div className="container position-relative">
				<div className="row">
					<div className="col-md-8 pt-3">
						<div className="shadow-sm rounded bg-white mb-3 overflow-hidden">
							<div className="d-flex item-aligns-center">
								<p className="font-weight-bold h6 p-3 border-bottom mb-0 w-100">Menu</p>

								{/* <a className="small text-primary font-weight-bold ml-auto" href="#">View all <i className="feather-chevrons-right"></i></a> */}
							</div>

							<div className="row m-0">
								{/* <h6 className="p-3 m-0 bg-light w-100">
													Recommended
													<small className="text-black-50 ml-2">
														{item.length}
														ITEMS
													</small>
												</h6> */}

								{resturantList?.menu?.items &&
									Object.values(resturantList?.menu?.items).map((item, index) => (
										<>
											<h6
												className="p-3 m-0 bg-light w-100 border-top item-category"
												id={item.category}
											>
												{item.category}
											</h6>
											<div className="col-md-12 px-0 border-top">
												<div className="p-3 menu-list">
													<span className="float-right">
														<a
															href="#"
															className="btn btn-outline-secondary btn-sm"
															data-toggle="modal"
															data-target="#extras"
														>
															ADD
														</a>
													</span>
													<div className="media">
														<img
															alt="#"
															src={
																!item?.cloudinaryImageId
																	? "https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/3cb974c28eb00627cc0671685c79ffd9.jpg"
																	: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
																	  item.cloudinaryImageId
															}
															className="mr-3 rounded-pill "
														/>
														<div className="media-body">
															<h6 className="mb-1">
																{item?.name}
																{item.attributes.vegClassifier === "VEG" ? (
																	<span className="ml-2 badge badge-success text-white">
																		Veg
																	</span>
																) : item.attributes.vegClassifier === "NONVEG" ? (
																	<span className="ml-2 badge badge-danger text-white">
																		Non veg
																	</span>
																) : (
																	""
																)}
															</h6>
															<p className="text-muted mb-0">₹ {item?.price / 100}</p>
														</div>
													</div>
												</div>
											</div>
										</>
									))}
							</div>
						</div>
					</div>
					<div className="col-md-4 pt-3">
						<div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
							<div className="d-flex border-bottom osahan-cart-item-profile bg-white p-3">
								<img
									alt="osahan"
									src={IMG_CDN_URL + resturantList?.cloudinaryImageId}
									className="mr-3 rounded-circle img-fluid"
									style={{ width: "40px", height: "40px" }}
								/>
								<div className="d-flex flex-column">
									<h6 className="mb-1 font-weight-bold">{resturantList?.name}</h6>
									<p className="mb-0 small text-muted">
										<i className="feather-map-pin" /> {resturantList?.locality},{" "}
										{resturantList?.city}
									</p>
								</div>
							</div>
							<div className="bg-white border-bottom py-2">
								{resturantList?.menu?.widgets.map((item, index) => (
									<div
										className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom"
										key={index}
									>
										<div className="media align-items-center">
											<a href={"#" + item.name} className="media-body">
												<p className="m-0">{item.name}</p>
											</a>
										</div>
									</div>
								))}
							</div>
							{/* <div className="bg-white p-3 py-3 border-bottom clearfix">
									<div className="input-group-sm mb-2 input-group">
										<input
											placeholder="Enter promo code"
											type="text"
											className="form-control"
										/>
										<div className="input-group-append">
											<button type="button" className="btn btn-primary">
												<i className="feather-percent" /> APPLY
											</button>
										</div>
									</div>
									<div className="mb-0 input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="feather-message-square" />
											</span>
										</div>
										<textarea
											placeholder="Any suggestions? We will pass it on..."
											aria-label="With textarea"
											className="form-control"
											defaultValue={""}
										/>
									</div>
								</div> */}
							{/* <div className="bg-white p-3 clearfix border-bottom">
									<p className="mb-1">
										Item Total <span className="float-right text-dark">$3140</span>
									</p>
									<p className="mb-1">
										Restaurant Charges{" "}
										<span className="float-right text-dark">$62.8</span>
									</p>
									<p className="mb-1">
										Delivery Fee
										<span className="text-info ml-1">
											<i className="feather-info" />
										</span>
										<span className="float-right text-dark">$10</span>
									</p>
									<p className="mb-1 text-success">
										Total Discount<span className="float-right text-success">$1884</span>
									</p>
									<hr />
									<h6 className="font-weight-bold mb-0">
										TO PAY <span className="float-right">$1329</span>
									</h6>
								</div>
								<div className="p-3">
									<a className="btn btn-success btn-block btn-lg" href="successful.html">
										PAY $1329
										<i className="feather-arrow-right" />
									</a>
								</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResturantMenu;
