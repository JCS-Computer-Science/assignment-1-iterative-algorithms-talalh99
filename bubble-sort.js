function bubbleSort(numberArr, size) {
    for (var lastIndex = size - 1; lastIndex > 0; lastIndex--) {
        for (var i = 0; i < lastIndex; i++) {
            if (numberArr[i] > numberArr[i + 1]) {
                var temp = numberArr[i];
                numberArr[i] = numberArr[i + 1];
                numberArr[i + 1] = temp;
            }
        }
    }
    return numberArr;
}
var arr = [14, -25, 65, 19, 23, 4];
console.log(bubbleSort(arr, arr.length));
module.exports = bubbleSort;
/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

/* 
    **let isSwapped = true
    while(isSwapped) {
        isSwapped = false
        arr.forEach((item, index) => {
            if(item > arr[index +1]) {
                arr[index] = arr[index + 1]
                arr[index + 1] = item
                isSwapped = true
            }
        })
        return arr
    }
*/