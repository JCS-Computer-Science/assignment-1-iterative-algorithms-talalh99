const insertionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let n = i - 1
		let temp = arr[i]
		while (n >= 0 && arr[n] > temp) {
			arr[n + 1] = arr[n]
			n--
		}
		arr[n+1] = temp
	}

	return arr;
}
module.exports = insertionSort;
