function binarySearch(arr, searchTerm) {
	var firstIndex = 0;
	var lastIndex = arr.length - 1;
	var middleIndex = Math.floor ((lastIndex + firstIndex)/2);

	while(arr[middleIndex] != searchTerm && firstIndex < lastIndex) {
		if (searchTerm < arr[middleIndex]) {
			lastIndex = middleIndex -1;
		}
		else if (searchTerm > arr[middleIndex]) {
			firstIndex = middleIndex + 1;
		}
		middleIndex = Math.floor((lastIndex + firstIndex)/2);
	}
	return (arr[middleIndex] != searchTerm) ? -1 : middleIndex;
}

module.exports = binarySearch;
/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */