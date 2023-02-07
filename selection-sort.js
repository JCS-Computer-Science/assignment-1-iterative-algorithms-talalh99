function selectionSort(arr) {
	let t = arr.length;

	for(let i = 0; i < t; i++) {
		let min = i;
		for(let j = i+1; j < t; j++) {
			if(arr[j] < arr[min]) {
				min=j;
			}
		}
		if (min != i) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
	return arr;
}
module.exports = selectionSort;
