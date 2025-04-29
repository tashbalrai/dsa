/**
 * Calculates the factorial of a non-negative integer using recursion.
 *
 * @param {number} n The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of n.
 * @throws {Error} If n is a negative number.
 *
 * Example:
 * factorialRecursive(5) => 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n) - Linear time complexity because it makes n recursive calls.
 * Space Complexity: O(n) - Linear space complexity due to the call stack growing linearly with n.
 */
function factorialRecursive(n) {
  if (n<0) throw Error('Factorial of negative numbers is undefined.')

  if (n <= 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

/**
 * Calculates the factorial of a non-negative integer using iteration.
 *
 * @param {number} n The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of n.
 * @throws {Error} If n is a negative number.
 *
 * Example:
 * factorialIterative(5) => 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n) - Linear time complexity because it iterates from 1 to n.
 * Space Complexity: O(1) - Constant space complexity because it uses a fixed amount of memory regardless of the input size.
 */
function factorialIterative(n) {
  if (n<0) throw Error('Factorial of negative numbers is undefined.')

  if (n <= 1) {
    return 1;
  }

  let factorial = 1;
  for(let i=1; i<=n; i++) {
    factorial *= i;
  }
  return factorial;
}

/**
 * Calculates the factorial of a non-negative integer using tail-call recursion with an accumulator.
 *
 * @param {number} n The non-negative integer for which to calculate the factorial.
 * @param {number} acc The accumulator variable to store the intermediate product (default is 1).
 * @returns {number} The factorial of n.
 * @throws {Error} If n is a negative number.
 *
 * Example:
 * factorialAccumulator(5) => 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n) - Linear time complexity because it makes n recursive calls.
 * Space Complexity: O(n) - Linear space complexity due to the call stack growing linearly with n.
 *                           Note: Some JavaScript engines with tail-call optimization (TCO) could reduce this to O(1).
 */
function factorialAccumulator(n, acc=1) {
  if (n<0) throw Error('Factorial of negative numbers is undefined.')

    if (n <= 1) {
      return acc;
    }

    return factorialAccumulator(n-1, acc * n);
}

/**
 * Calculates the factorial of a non-negative integer using recursion with memoization.
 *
 * @param {number} n The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of n.
 * @throws {Error} If n is a negative number.
 *
 * Example:
 * factorialMemo(5) => 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n) - Linear time complexity in the worst case (first call). Subsequent calls with the same n are O(1).
 * Space Complexity: O(n) - Linear space complexity due to the memo object storing n values.
 */
const memo = {0:1, 1:1}
function factorialMemo(n) {
  if (n<0) throw Error('Factorial of negative numbers is undefined.')

  if(memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = n * factorialMemo(n-1);
  return memo[n];
}

/**
 * Calculates the factorial of a non-negative integer using an optimized iterative approach.
 * This approach reduces the number of iterations by processing two numbers at a time.
 *
 * @param {number} n The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of n.
 * @throws {Error} If n is a negative number.
 *
 * Example:
 * factorial2xIterative(5) => 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n/2) => O(n) - Linear time complexity, but with half the iterations compared to the naive iterative approach.
 * Space Complexity: O(1) - Constant space complexity because it uses a fixed amount of memory regardless of the input size.
 */
function factorial2xIterative(n) {
  if (n<0) throw Error('Factorial of negative numbers is undefined.')

    if (n <= 1) {
      return 1;
    }
  
    let factorial = 1;

    for(; n>1; n=n-2) {
      factorial *= n * (n-1);
    }

    return factorial;
}

console.log('Recursive naive: ',factorialRecursive(5));
console.log('Iterative naive: ',factorialIterative(5));
console.log('Recursive accumulator: ', factorialAccumulator(5));
console.log('Recursive memoization: ', factorialMemo(5), memo);
console.log('Iterative double speed: ', factorial2xIterative(5));
