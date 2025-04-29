/**
 * Calculates the sum of the first n odd numbers using recursion.
 *
 * @param {number} n The number of odd numbers to sum.  Must be a non-negative integer.
 * @returns {number} The sum of the first n odd numbers.
 *
 * Example:
 * sumOfOdd(3) => 1 + 3 + 5 = 9
 */
function sumOfOdd(n) {
    return n <= 0 ? 0 : n * n;
}

function sumOfOddFast(n) {
    if (n <= 0) return 0;

    // The sum of the first n odd numbers is n^2.
    return n * n;
}

function sumOfOddIterative(n) {
    if (n<=0) return 0;

    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += 2*i -1;
    }

    return sum;
}

console.log(sumOfOdd(3)); // Output: 9
console.log(sumOfOddFast(3)); // Output: 9
console.log(sumOfOddIterative(3)); // Output: 9

/**
 *
 *  Tracing Tree for sumOfOdd(3):
 *
 *          sumOfOdd(3)
 *          /       \
 *         5       sumOfOdd(2)
 *                /       \
 *               3       sumOfOdd(1)
 *                      /       \
 *                     1       sumOfOdd(0)
 *                            /
 *                           0
 *
 *  Stack Frame during execution:
 *
 *  +---------------------+
 *  | sumOfOdd(0) : 0     |  <- Top of stack (Base case)
 *  +---------------------+
 *  | sumOfOdd(1) : 1     |
 *  +---------------------+
 *  | sumOfOdd(2) : 4     |
 *  +---------------------+
 *  | sumOfOdd(3) : 9     |  <- Bottom of stack
 *  +---------------------+
 *
 *
 * Time Complexity: O(n)
 *  - The function makes 'n' recursive calls, where 'n' is the input number.
 *  - Each recursive call performs a constant amount of work (arithmetic operations and addition).
 *
 * Space Complexity: O(n)
 *  - Each recursive call adds a new frame to the call stack.
 *  - The maximum depth of the recursion is 'n', so the space required for the call stack grows linearly with 'n'.
 */
