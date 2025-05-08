function findMissingElements(arr) {
    if (arr.length <= 1) return [];

    let diff = arr[0], missing = [];
    for(let i=1; i<arr.length; i++) {
        if(diff < arr[i] - i) {
            while(diff < arr[i] - i) {
                missing.push(i + diff);
                diff++;
            }
        }
    }
    return missing;
}

function findMissingElements2(arr) {
    if (arr.length <= 1) return []; // Return empty array instead of null for consistency
    const missing = [];
    let expected = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > expected) {
            while (expected < arr[i]) {
                missing.push(expected);
                expected++;
            }
        }
        expected++; // Move to the next expected value
    }
    return missing;
}

function findMissingElementsHashSet(arr) {
     if (arr.length <= 1) return [];

     let numSet = new Set(arr);
     let min = Math.min(...arr);
     let max = Math.max(...arr);
     let missing = [];

     for(let i=min; i<max; i++) {
        if(!numSet.has(i)) {
            missing.push(i);
        }
     }

     return missing;
}

console.log(findMissingElementsHashSet([1,2,3,5,6,9,10]))
console.log(findMissingElementsHashSet([1,5,10]))