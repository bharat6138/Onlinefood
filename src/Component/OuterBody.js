import React, { useState, useEffect } from "react";
import Restuarants from "./Restuarants";
import { usePosition } from "../../utils/usePosition";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { IMG_SLIDER_URL } from "./config";
import { Skeleton, Skeletonimg } from "./Skeleton";
import { Link } from "react-router-dom";
export const OuterBody = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [allresturantList, setAllResturantList] = useState([]);
	const [filteredResturantsList, setFilteredResturantsList] = useState([]);
	const [sliderResturantsList, setSliderResturantsList] = useState([]);
	const { latitude, longitude, error } = usePosition();
	const API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;

	function filterData(searchInput, resturantsList) {
		let searchData = resturantsList.filter((item) =>
			item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()),
		);
		// console.log(searchData);
		return searchData;
	}
	useEffect(() => {
		if (latitude && longitude) getRestaurants();
	}, [latitude, longitude]);

	// console.log(API_URL);
	async function getRestaurants() {
		const data = await fetch(API_URL);

		const json = await data.json();
		setAllResturantList(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredResturantsList(json?.data?.cards[2]?.data?.data?.cards);
		setSliderResturantsList(json?.data?.cards[0]?.data?.data?.cards);
		console.log(API_URL);
		// console.log(ADDRESS);
	}
	var settings = {
		slidesToShow: 4,
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<>
			<div class="osahan-home-page">
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
				<div className="container">
					{/* Most popular */}
					<div className="py-3 title ">
						<div className="row align-items-center mb-4 mt-3 ">
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
					{/* Most popular */}
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
			)}
		</>
	);
};
