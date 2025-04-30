/**
 * Calculates the sum of squares of the first n natural numbers using recursion.
 *
 * @param {number} n - The number of natural numbers to sum the squares of.
 * @returns {number} - The sum of squares of the first n natural numbers.
 *
 * Example:
 * sumOfNSquare(3) => 1^2 + 2^2 + 3^2 = 14
 *
 * Time Complexity: O(n) - Linear time complexity because it makes n recursive calls.
 * Space Complexity: O(n) - Linear space complexity due to the call stack growing linearly with n.
 */
function sumOfNSquare(n) {
  // Base case
  if (n <= 0) return 0;

  // Recursive case
  return n * n + sumOfNSquare(n - 1);
}

/**
 * Tracing Tree for sumOfNSquare(3):
 *
 *          sumOfNSquare(3)
 *          /       \
 *       3^2       sumOfNSquare(2)
 *                  /       \
 *               2^2       sumOfNSquare(1)
 *                          /       \
 *                       1^2       sumOfNSquare(0)
 *                                  /
 *                                 0
 *
 * Stack Frame during execution:
 *
 *  +---------------------+
 *  | sumOfNSquare(0) : 0 |  <- Top of stack (Base case)
 *  +---------------------+
 *  | sumOfNSquare(1) : 1 |
 *  +---------------------+
 *  | sumOfNSquare(2) : 5 |
 *  +---------------------+
 *  | sumOfNSquare(3) : 14|  <- Bottom of stack
 *  +---------------------+
 */

// Test cases
let allTestsPassed = true;

allTestsPassed = allTestsPassed && (sumOfNSquare(1) === 1 || console.error('Test Case 1 Failed'));
allTestsPassed = allTestsPassed && (sumOfNSquare(2) === 5 || console.error('Test Case 2 Failed'));
allTestsPassed = allTestsPassed && (sumOfNSquare(3) === 14 || console.error('Test Case 3 Failed'));

if (allTestsPassed) {
  console.log('All test cases passed!');
}