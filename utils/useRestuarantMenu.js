import React, { useState, useEffect } from "react";
import { usePosition } from "./usePosition";
import { RES_API_URL } from "../src/Component/config";
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

	function removeDuplicate() {
		let items = $(".item-category");

		let repes = items.filter(
			(ind, itm) => $(itm).prevAll(`:contains(${itm.innerText})`).length,
		);

		repes.remove();
	}
	removeDuplicate();
	useEffect(() => {
		if (latitude && longitude) getRestaurants();
		return () => {
			removeDuplicate();
		};
	}, [latitude, longitude]);

	return resturantList;
};

export default useRestuarantMenu;
