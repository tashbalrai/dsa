/**
 * Merges two sorted arrays into one sorted array
 * @param {Array} arr1 - First sorted array
 * @param {Array} arr2 - Second sorted array
 * @returns {Array} - New array containing all elements from both arrays, sorted
 * 
 * Time Complexity: O(n + m) - Where n and m are lengths of arr1 and arr2
 * Space Complexity: O(n + m) - Creates new array for merged result
 */
function merged2SortedArrays(arr1, arr2) {
    // Handle empty array cases
    if (arr1.length === 0 && arr2.length === 0) return [];
    if (arr1.length === 0) return arr2.slice(); // Return copy to avoid mutation
    if (arr2.length === 0) return arr1.slice(); // Return copy to avoid mutation

    let merged = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Merge while both arrays have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {  // Note: using <= for stable sorting
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

console.log(merged2SortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(merged2SortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(merged2SortedArrays([1, 2, 3], [])); // [1, 2, 3]
console.log(merged2SortedArrays([1, 1, 1], [1, 1, 1])); // [1, 1, 1, 1, 1, 1]
console.log(merged2SortedArrays([1, 2], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
