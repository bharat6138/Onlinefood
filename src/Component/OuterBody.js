import React, { useState } from "react";
import Restuarants from "./Restuarants";
import Slider from "react-slick";
import { IMG_SLIDER_URL, settings } from "./config";
import { Skeleton, Skeletonimg } from "./Skeleton";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useGetRestuarant from "../../utils/useGetRestuarant";
import { useParams } from "react-router-dom";
import logo from "../../assets/img/logo_web.png";
export const OuterBody = () => {
	const { id } = useParams();
	console.log(id);
	const [searchKeyword, setSearchKeyword] = useState("");
	const {
		delivery,
		allresturantList,
		filteredResturantsList,
		sliderResturantsList,
		setFilteredResturantsList,
	} = useGetRestuarant(id);
	return (
		<>
			<div className="osahan-home-page">
				<div className="bg-primary p-3 d-none">
					<div className="text-white">
						<div className="title d-flex align-items-center">
							<a className="toggle mt-1" href="#">
								<span />
							</a>
							<h4 className="font-weight-bold m-0 pl-5">
								<img
									src={logo}
									className="mr-2"
									style={{ width: "40px", filter: "brightness(0.5)" }}
									alt="logo"
								/>{" "}
								Foodvilla
							</h4>
						</div>
					</div>
				</div>

				<div style={{ backgroundColor: "#171a29" }}>
					<div className="container">
						{allresturantList?.length === 0 ? (
							<div className="offer-slider row">
								{Array(4)
									.fill("")
									.map((e, index) => (
										<div
											className="cat-item py-3 px-2 col-md-3 shadow-sm skeleton"
											key={index}
										>
											<Skeletonimg />
										</div>
									))}
							</div>
						) : (
							<Slider {...settings} className="offer-slider">
								{sliderResturantsList.map((item, index) => (
									<div className="cat-item px-1 py-3" key={index}>
										<div key={item.data.bannerId}>
											<a className="d-block text-center shadow-sm" href="/">
												<img
													alt="#"
													src={IMG_SLIDER_URL + item.data.creativeId}
													className="img-fluid rounded"
												/>
											</a>
										</div>
									</div>
								))}
							</Slider>
						)}
					</div>
				</div>
			</div>
			{allresturantList?.length === 0 ? (
				<div className="container mt-3">
					<div className="most_popular">
						<div className="row">
							{Array(4)
								.fill("")
								.map((e, index) => (
									<div className="col-md-3 pb-3" key={index}>
										<div className="skeleton">
											<Skeleton />
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			) : (
				<>
					<div className="bg-white shadow-sm">
						<div className="container">
							<div className="bg-white">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item" role="presentation">
										<Link
											className="px-0 py-3 nav-link text-dark h6 border-0 mb-0 active"
											id="relevance-tab"
											data-toggle="tab"
											to="/"
											data-target="#relevance"
											role="tab"
											aria-controls="relevance"
											aria-selected="false"
										>
											Relevance
										</Link>
									</li>
									<li className="nav-item bottom-tab" role="presentation">
										<Link
											className="px-0 py-3 nav-link text-dark h6 border-0 mb-0 ml-3"
											id="delivery-tab"
											data-toggle="tab"
											to="/DELIVERY_TIME"
											data-target="#delivery"
											role="tab"
											aria-controls="delivery"
											aria-selected="true"
										>
											Delivery Time
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="container">
						{/* Most popular */}
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active py-4"
								id="relevance"
								role="tabpanel"
								aria-labelledby="relevance-tab"
							>
								{/* Most popular */}
								<div className="title ">
									<div className="row align-items-center mb-4">
										<div className="col-md-6">
											<h5 className="m-0">
												{filteredResturantsList?.length > 0
													? `${filteredResturantsList?.length} resturants`
													: "no result found"}
											</h5>
										</div>
										<div className="col-md-6">
											<div className="input-group">
												<input
													type="text"
													className="form-control form-control-lg input_search border-right-0"
													id="inlineFormInputGroup"
													placeholder="Search for restaurants and food"
													value={searchKeyword}
													onChange={(e) => setSearchKeyword(e.target.value)}
												/>
												<div className="input-group-prepend">
													<div
														className="btn input-group-text bg-white border_search border-left-0 text-primary"
														onClick={() => {
															let filtered = filterData(searchKeyword, allresturantList);
															setFilteredResturantsList(filtered);
														}}
													>
														<i className="feather-search" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="most_popular">
									<div className="row">
										{filteredResturantsList?.map((restaurant, index) => {
											return (
												<Link
													to={"/restaurant/" + restaurant.data.id}
													className="col-md-3 pb-3"
													key={index}
												>
													<Restuarants {...restaurant.data} />
												</Link>
											);
										})}
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade py-4"
								id="delivery"
								role="tabpanel"
								aria-labelledby="delivery-tab"
							>
								<h5 className="mb-1">
									{delivery?.length > 0
										? `All offers (${delivery?.length})`
										: "no result found"}
								</h5>
								<p>All offers and deals, from restaurants near you</p>
								<div className="most_popular">
									<div className="row">
										{delivery?.map((restaurant, index) => {
											return (
												<Link
													to={"/restaurant/" + restaurant.data.id}
													className="col-md-3 pb-3"
													key={index}
												>
													<Restuarants {...restaurant.data} />
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
