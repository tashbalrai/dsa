function findMinMax(arr) {
    if(arr.length === 0) return [];

    let min = arr[0];
    let max = arr[0];
    for(const item of arr) {
        if (item < min) {
            min = item
        } else if (item > max) {
            max = item;
        }
    }

    return [min, max]
}

function findMinMaxPair(arr) {
    if(arr.length === 0) return [];

    let min = arr[0];
    let max = arr[0];

    for(let i=0; i<arr.length-1; i=i+2) {
        let first = arr[i];
        let second = arr[i+1];

        let [smaller, larger] = first > second ? [second, first] : [first, second];

        min = Math.min(min, smaller);
        max = Math.max(max, larger);
    }

    if (arr.length % 2 !== 0) {
        min = Math.min(min, arr[arr.length-1])
        max = Math.max(max, arr[arr.length-1])
    }

    return [min, max];
}

console.log(findMinMaxPair([5,2,5,9,-1,23,80]))