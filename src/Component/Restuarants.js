import React from "react";
import { IMG_CDN_URL } from "./config";
const Restuarants = ({
	name,
	cloudinaryImageId,
	cuisines,
	lastMileTravelString,
	avgRating,
	slaString,
	costForTwoString,
	ribbon,
	totalRatings,
	aggregatedDiscountInfo,
}) => {
	return (
		<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
			<div className="list-card-image">
				<div className="star position-absolute">
					<span
						className={
							avgRating <= 3.9 && !isNaN(avgRating)
								? "badge badge-warning"
								: "badge badge-success "
						}
					>
						<i className="feather-star" /> {avgRating} ({totalRatings}+)
					</span>
				</div>
				<div className="favourite-heart text-danger position-absolute">
					<a href="#">
						<i className="feather-heart" />
					</a>
				</div>
				{ribbon ? (
					<div className="member-plan position-absolute">
						<span className="badge badge-dark">{ribbon[0].type}</span>
					</div>
				) : (
					""
				)}

				<a href="/">
					<img
						alt="#"
						src={IMG_CDN_URL + cloudinaryImageId}
						className="img-fluid item-img w-100"
					/>
				</a>
			</div>
			<div className="p-3 position-relative">
				<div className="list-card-body">
					<h6 className="mb-1">
						<a href="restaurant.html" className="text-black">
							{name}
						</a>
					</h6>
					<p className="text-gray mb-1 small">{cuisines.join(", ")}</p>
					<p className="text-gray mb-1 rating"></p>
					<p className="text-gray mb-3 time">
						<span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
							<i className="feather-clock" /> {slaString}
						</span>{" "}
						<span className="float-right text-black-50">{costForTwoString}</span>
					</p>

					<p />
				</div>

				{aggregatedDiscountInfo ? (
					<div className="list-card-badge">
						<span className="badge badge-danger">OFFER</span>{" "}
						<small>{aggregatedDiscountInfo?.shortDescriptionList[0].meta}</small>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Restuarants;
