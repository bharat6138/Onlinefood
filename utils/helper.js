export function filterData(searchInput, resturantsList) {
	let searchData = resturantsList.filter((item) =>
		item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()),
	);
	// console.log(searchData);
	return searchData;
}

export function urlChange(urlToggle) {
	urlToggle = !urlToggle;
	if (urlToggle) {
		baseUrl = "https://swapi.dev/api/people";
	} else {
		baseUrl = "https://pokeapi.co/api/v2/berry";
	}
}
