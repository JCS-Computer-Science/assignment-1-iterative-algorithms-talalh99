function binarySearch(arr, searchTerm) {
	var firstIndex = 0;
	var lastIndex = items.length - 1;
	var middleIndex = Math.floor ((lastIndex + firstIndex)/2);

	return null;
}

module.exports = binarySearch;
/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */