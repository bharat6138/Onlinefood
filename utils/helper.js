export function filterData(searchInput, resturantsList) {
	let searchData = resturantsList.filter((item) =>
		item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()),
	);
	// console.log(searchData);
	return searchData;
}

export function removeDuplicate() {
	let items = $(".item-category");

	let repes = items.filter(
		(ind, itm) => $(itm).prevAll(`:contains(${itm.innerText})`).length,
	);

	repes.remove();
	items.removeClass("d-none");
}
