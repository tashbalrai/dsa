/**
 * Calculates the factorial of a number using recursion.
 *
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the number.
 *
 * Example:
 * factorial(5) => 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n) - Linear time complexity because it makes n recursive calls.
 * Space Complexity: O(n) - Linear space complexity due to the call stack growing linearly with n.
 *
 * Stack Frame during execution of factorial(3):
 *
 *  +---------------------+
 *  | factorial(0) : 1    |  <- Top of stack (Base case)
 *  +---------------------+
 *  | factorial(1) : 1    |
 *  +---------------------+
 *  | factorial(2) : 2    |
 *  +---------------------+
 *  | factorial(3) : 6    |  <- Bottom of stack
 *  +---------------------+
 */
const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

/**
 * Calculates the super factorial of a number using recursion and memoization.
 *
 * The super factorial of a number n is defined as the product of the factorials of all numbers from 1 to n.
 *
 * @param {number} n - The number to calculate the super factorial for.
 * @returns {number} - The super factorial of the number.
 *
 * Example:
 * superFactorial(3) => factorial(1) * factorial(2) * factorial(3) = 1 * 2 * 6 = 12
 *
 * Time Complexity: O(n^2) - For each number from 1 to n, the factorial function is called, which itself is O(n).
 * Space Complexity: O(n) - Linear space complexity due to the call stack growing linearly with n.
 *
 * Tracing Tree for superFactorial(3):
 *
 *          superFactorial(3)
 *          /       \
 *   factorial(3)   superFactorial(2)
 *                  /       \
 *           factorial(2)   superFactorial(1)
 *                          /       \
 *                   factorial(1)   superFactorial(0)
 *
 * Stack Frame during execution of superFactorial(3):
 *
 *  +-----------------------------+
 *  | superFactorial(0) : 1       |  <- Top of stack (Base case)
 *  +-----------------------------+
 *  | superFactorial(1) : 1       |
 *  +-----------------------------+
 *  | superFactorial(2) : 2       |
 *  +-----------------------------+
 *  | superFactorial(3) : 12      |  <- Bottom of stack
 *  +-----------------------------+
 */
const factorialMap = new Map();

const superFactorial = (n) => {
  if (n <= 1) return 1;

  factorialMap.has(n) ? factorialMap.get(n) : factorialMap.set(n, factorial(n));
  return factorialMap.get(n) * superFactorial(n - 1);
};

// Test cases
console.log(superFactorial(3)); // 12
console.log(superFactorial(4)); // 288
console.log(superFactorial(5)); // 34560
console.log(superFactorial(6)); // 24883200
