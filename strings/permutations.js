function permute(str) {
  const result = [];
  const arr = str.split('');
  
  function backtrack(start) {
    if (start === arr.length - 1) {
      result.push(arr.join(''));
      return;
    }
    
    for (let i = start; i < arr.length; i++) {
      // Swap
      [arr[start], arr[i]] = [arr[i], arr[start]];
      
      // Recurse
      backtrack(start + 1);
      
      // Backtrack (swap back)
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }
  
  backtrack(0);
  return result;
}

// Usage:
// console.log(permute('abc'));

//javascript program to print unique permutation of string 
//using hash map.

// Recursive function to generate permutations
function genPermutations(n, curr, cnt, res) {

    // Base case: If the current permutation length equals 
    // the input string length, add it to the result
    if (curr.length === n) {
        res.push(curr);
        return;
    }

    // Iterate through each character in the frequency map
    for (let c in cnt) {
        if (cnt[c] === 0) 
            continue;

        // Include the character in the current permutation
        cnt[c]--;
        console.log(`Calling: (${n}, ${curr+c})`, {cnt})
        // Recur to build the next character in the permutation
        genPermutations(n, curr + c, cnt, res);

        // Backtrack: Restore the count
        cnt[c]++;
        console.log('Returning: ', {curr,c,cnt})
    }
}

// Function to find all unique permutations of the input string
function findPermutation(s) {

    // Array to store the result
    const res = []; 
    
    // Frequency map to count occurrences of each character
    const cnt = {};

    // Populate the frequency map with the characters of the input string
    for (const c of s) 
        cnt[c] = (cnt[c] || 0) + 1;

    // Generate permutations
    genPermutations(s.length, "", cnt, res);
    return res;
}

// Driver code 
const s = "ABB";
const res = findPermutation(s);

// Print the permutations
console.log(res.join(" "));