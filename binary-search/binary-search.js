'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	array = array.sort();
	let middle = Math.floor(array.length / 2);
	if (array[middle] === target){
		return true;
	} else if (array.length === 1){
		return false;
	}else {
		let right = array.slice(0, middle);
		let left = array.slice(middle);
		if (target < array[middle]){
			return binarySearch(right,target)
		}else{
			return binarySearch(left, target)
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch