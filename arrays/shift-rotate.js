function shiftLeft(arr) {
    if (arr.length === 0) return undefined;

    let shifted = arr[0];
    
    for(let i=0;i<arr.length - 1;i++) {
        arr[i] = arr[i+1];
    }

    arr.length = arr.length - 1
    return {shifted, arr};
}

function shiftRight(arr) {
    if (arr.length === 0) return undefined;

    let shifted = arr[arr.length - 1];
    arr.length -= 1;
    return {shifted, arr};
}

function rotate(arr, times = 1) {
    if (arr.length === 0 || arr.length ===1) return arr;

    let firstElement;

    times = times % arr.length;
    console.log(times);

    while(times > 0) {
        firstElement = arr[0];
        for(let i=0; i<arr.length - 1; i++)
        {
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = firstElement;
        times--;
    }
    return arr;
}

function rotateReverse(arr, times = 1) {
    if (arr.length <= 1) return arr;
    times = times % arr.length;
    if (times < 0) times += arr.length; // Handle negative rotations

    // Reverse the first `k` elements
    reverse(arr, 0, times - 1);
    // Reverse the remaining elements
    reverse(arr, times, arr.length - 1);
    // Reverse the entire array
    reverse(arr, 0, arr.length - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(shiftRight([1,2,3,4]))
console.log(rotate([1,2,3,4],1))
console.log(rotateReverse([1,2,3,4],1))