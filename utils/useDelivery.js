import React, { useState, useEffect } from "react";
import { usePosition } from "./usePosition";
import { RES_API_URL } from "../src/Component/config";
const useDelivery = (id) => {
	const [sesturantList, setSesturantList] = useState(null);
	const { latitude, longitude, error } = usePosition();
	// const [deliveryTime, setDeliveryTime] = useState([]);
	const API_URL = `${RES_API_URL}restaurants/list/v5?lat=${latitude}&lng=${longitude}&sortBy=${id}&page_type=DESKTOP_WEB_LISTING`;

	async function getRestaurants() {
		const data = await fetch(API_URL);
		const json = await data.json();
		setSesturantList(json?.data?.cards[0]?.data?.data?.cards);
		console.log(API_URL);
	}
	useEffect(() => {
		if (id !== undefined) {
			if (latitude && longitude && id) getRestaurants({ id });
		}
	}, [latitude, longitude, id]);

	return sesturantList;
};

export default useDelivery;
