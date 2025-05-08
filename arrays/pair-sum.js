function findPairSumSortedArray(sortedArray, targetSum) {
    let left = 0, right = sortedArray.length-1; 
    let pairs = [];
    while(left<right) {
        let pairSum = sortedArray[left] + sortedArray[right];
        if(pairSum === targetSum) {
            pairs.push([sortedArray[left],sortedArray[right]]);
            left++;
            right--;
        } else if (pairSum > targetSum) {
            right--;
        } else {
            left++;
        }
    }
    return pairs.length > 0? pairs : undefined;
}

function findPairSumHashset(arr, sum) {
    let seen = new Set();
    let found = new Map();
    for(const num of arr) {
        let compliment = sum - num;
        if(seen.has(compliment)) {
            let pair = `${Math.min(compliment, num)},${Math.max(compliment, num)}`;
            if (!found.has(pair)) {
                found.set(pair, [compliment, num])
            }
        }
        seen.add(num)
    }
    return Array.from(found.values());
}

console.log(findPairSumHashset([1,2,3,4,5,6,7,8], 10));