# Onlinefood

Get LAT LNG

import { useState, useEffect } from "react";
export const usePosition = () => {
	const [position, setPosition] = useState({});
	const [error, setError] = useState(null);

	const onChange = ({ coords }) => {
		setPosition({
			latitude: coords.latitude,
			longitude: coords.longitude,
		});
	};
	const onError = (error) => {
		setError(error.message);
	};
	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError("Geolocation is not supported");
			return;
		}
		const watcher = geo.watchPosition(onChange, onError);
		watcher;
		return () => geo.clearWatch(watcher);
	}, []);
	console.log({ ...position });

	return { ...position, error };
};


Get Restuarant (Relevance and Delivery time)

import React, { useState, useEffect } from "react";
import { usePosition } from "./usePosition";
import { RES_API_URL } from "../src/Component/config";
const useGetRestuarant = (id) => {
	const { latitude, longitude, error } = usePosition();
	const [allresturantList, setAllResturantList] = useState([]);
	const [filteredResturantsList, setFilteredResturantsList] = useState([]);
	const [sliderResturantsList, setSliderResturantsList] = useState([]);
	const [delivery, setDelivery] = useState([]);
	const API_URL = `${RES_API_URL}restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;

	const DELI_API_URL = `${RES_API_URL}restaurants/list/v5?lat=${latitude}&lng=${longitude}&sortBy=${id}&page_type=DESKTOP_WEB_LISTING`;
	// console.log(API_URL);

	async function getRestaurants() {
		const data = await fetch(API_URL);

		const json = await data.json();
		setAllResturantList(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredResturantsList(json?.data?.cards[2]?.data?.data?.cards);
		setSliderResturantsList(json?.data?.cards[0]?.data?.data?.cards);
		console.log(API_URL);
	}
	async function getDelivery() {
		const data = await fetch(DELI_API_URL);
		const json = await data.json();
		setDelivery(json?.data?.cards[0]?.data?.data?.cards);
		console.log(DELI_API_URL);
	}

	useEffect(() => {
		if (id !== undefined) {
			if (latitude && longitude) getDelivery();
		} else {
			if (latitude && longitude) getRestaurants();
		}
	}, [latitude, longitude, id]);

	return {
		allresturantList,
		filteredResturantsList,
		sliderResturantsList,
		delivery,
		setFilteredResturantsList,
	};
};

export default useGetRestuarant;
