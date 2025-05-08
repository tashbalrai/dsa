function findDuplicatesAndCount(arr) {
    if (arr.length <= 1) return [];

    let duplicates = new Map();

    for(let i=0; i<arr.length; i++) {
        if (!duplicates.has(arr[i])) {
            duplicates.set(arr[i],1);
        } else {
            duplicates.set(arr[i], (duplicates.get(arr[i]))+1);
        }
    }

    for(let [key, value] of duplicates) {
        if(duplicates.get(key) === 1) duplicates.delete(key);
    }
    return duplicates;
}

function findDuplicatesAndCountSingleLoop(arr) {
    if (arr.length <= 1) return [];

    let duplicates = new Map();
    let entryMap = new Map();

    for(let i=0; i<arr.length; i++) {
        if (!entryMap.has(arr[i])) {
            entryMap.set(arr[i],1);
        } else {
            
            duplicates.set(arr[i], !duplicates.has(arr[i]) ? 2 : duplicates.get(arr[i]) + 1);
        }
    }

    return duplicates;
}

console.log(findDuplicatesAndCountSingleLoop([1,2,3,2,4,4,4,5]))