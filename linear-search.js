function linearSearch(arr, Searchterm) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === Searchterm) {
			return i;
		}
	}
	return -1
}
module.exports = linearSearch;