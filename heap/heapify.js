/**
 * Rearranges the input array in-place to satisfy the max-heap property.
 * A max-heap is a complete binary tree where each parent node is greater than or equal to its children.
 *
 * @param {number[]} input - The array to be heapified.
 * @returns {number[]} The heapified array (max-heap).
 * @throws {Error} If the input array is empty.
 *
 * Example:
 *   heapifyMaxHeap([5, 2, 4, 7, 6]) // returns [7, 6, 4, 5, 2] (order may vary, but 7 is at index 0)
 */
const heapifyMaxHeap = (input) => {
    if (input.length === 0) throw new Error("Cannot heapify empty input.");

    // Start from the last parent node and sift down each node to maintain max-heap property
    for (let i = Math.floor(input.length / 2) - 1; i >= 0; i--) {
        let parentIndex = i;
        let maxChildIndex = 2 * parentIndex + 1;

        while (maxChildIndex < input.length) {
            // If right child exists and is greater than left child, use right child
            if (
                maxChildIndex + 1 < input.length &&
                input[maxChildIndex + 1] > input[maxChildIndex]
            ) {
                maxChildIndex = maxChildIndex + 1;
            }

            // If parent is larger than both children, heap property is satisfied
            if (input[parentIndex] >= input[maxChildIndex]) break;

            // Swap parent with the larger child
            [input[parentIndex], input[maxChildIndex]] = [
                input[maxChildIndex],
                input[parentIndex],
            ];
            parentIndex = maxChildIndex;
            maxChildIndex = 2 * parentIndex + 1;
        }
    }

    return input;
};

// ------------- TEST CASES -----------
const testData = [
    [[5, 2, 4, 7, 6], 7],
    [[5, 12, 14, 7, 16], 16],
];

// ------------- TEST CASES ---------------
test("Empty throws error.", () => {
    expect(() => heapifyMaxHeap([])).toThrow();
});

test.each(testData)("Heapify %o, Top element %i", (input, expected) => {
    expect(heapifyMaxHeap(input)[0]).toBe(expected);
});
