import React, { useState, useEffect, useLayoutEffect } from "react";
import { usePosition } from "./usePosition";
import { RES_API_URL } from "../src/Component/config";
import { removeDuplicate } from "./helper";
const useRestuarantMenu = (id) => {
	const [resturantList, setResturantList] = useState(null);
	const { latitude, longitude, error } = usePosition();

	const API_URL = `${RES_API_URL}menu/v4/full?lat=${latitude}&lng=${longitude}&menuId=${id}`;
	async function getRestaurants() {
		const data = await fetch(API_URL);
		const json = await data.json();
		setResturantList(json?.data);
		console.log(API_URL);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("This will run every second!");
			if (latitude && longitude) getRestaurants();
		}, 1000);
		return () => clearInterval(interval);
	}, [latitude, longitude]);
	removeDuplicate();
	return resturantList;
};

export default useRestuarantMenu;
