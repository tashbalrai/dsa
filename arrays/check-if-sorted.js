/**
 * Checks if an array is sorted in either ascending or descending order
 * @param {Array} arr - The input array to check
 * @param {boolean} [isAscending=true] - Flag to check ascending (true) or descending (false) order
 * @returns {boolean} - True if the array is sorted, false otherwise
 * 
 * Time Complexity: O(n) - Linear time, worst case checks all elements
 * Space Complexity: O(1) - Constant space, uses fixed amount of memory
 */
function isSortedArray(arr, isAscending = true) {
    // Edge case: arrays with 0 or 1 elements are always sorted
    if (arr.length <= 1) return true;

    // Iterate through the array (stopping before last element)
    for (let i = 0; i < arr.length - 1; i++) {
        /* 
         * For ascending order: return false if current > next (out of order)
         * For descending order: return false if current < next (out of order)
         * Equal values don't trigger false (considered sorted)
         */
        if (isAscending ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
            return false; // Early exit if unsorted pair found
        }
    }
    
    // If loop completes without finding unsorted pairs
    return true;
}

// Test cases (should all pass)
console.log('Empty array:', isSortedArray([])); // true
console.log('Single element:', isSortedArray([1])); // true
console.log('Two sorted elements:', isSortedArray([1, 2])); // true
console.log('Five sorted elements:', isSortedArray([1, 2, 3, 4, 5])); // true
console.log('Descending (check asc):', isSortedArray([5, 4, 3, 2, 1])); // false
console.log('Descending (check desc):', isSortedArray([5, 4, 3, 2, 1], false)); // true
console.log('Unsorted array:', isSortedArray([1, 2, 3, 2, 5])); // false
console.log('Equal elements:', isSortedArray([1, 1, 1])); // true
console.log('Equal elements desc:', isSortedArray([1, 1, 1], false)); // true 
