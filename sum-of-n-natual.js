/*
Sum of n natural numbers.

S(n) = 1 + 2 + 3 + 4 +....+ n
*/

/**
 * Calculates the sum of the first n natural numbers using the formula: n * (n + 1) / 2.
 *
 * @param {number} n The number of natural numbers to sum (must be a non-negative integer).
 * @returns {number} The sum of the first n natural numbers.
 *
 * Example:
 * sumNaturalNumbers(5) => 1 + 2 + 3 + 4 + 5 = 15
 *
 * Time Complexity: O(1) - Constant time complexity because it performs a fixed number of arithmetic operations.
 * Space Complexity: O(1) - Constant space complexity because it uses a fixed amount of memory regardless of the input size.
 */
function sumNaturalNumbers(n) {
    return n <= 0 ? 0 : n * (n + 1) / 2;
}

/* 
How do we arrive at this formula?

1. Write the sum in reverse order:
    S(n) = n + (n - 1) + (n - 2) + ... + 3 + 2 + 1
2. Now, add the two equations:
    S(n) = 1 + 2 + 3 + 4 + ... + n
    S(n) = n + (n - 1) + (n - 2) + ... + 3 + 2 + 1
3. This gives us:
    2 * S(n) = (n + 1) + ((n-1) + 2) + ((n-2) + 3) + ... + (1 + n)
4. Each pair sums to (n + 1), and there are n/2 pairs. Why n/2? Because we are adding two time n natural numbers one in ascending order and one in descending order.
5. By taking n+1 as a common factor, we get:
    2S(n) = n * (n + 1) therefore ,
    S(n) = n * (n + 1) / 2
*/