/**
 * - Heap is a complete binary tree
 * - For a given node, its value is either greater than (Max Heap) or smaller (Min Heap) than all of its children.
 *
 * - Since a heap is a complete binary tree, we can efficiently store it in an array.
 * - Following are the formulas to access the parent-child relationship in an array.
 *
 * Index Calculation:
 *  Parent = floor((i-1)/2)
 *  Left Child = 2i + 1
 *  Right Child = 2i + 2
 */

const createMaxHeap = (arr) => {
    if (arr.length < 1) throw new Error("Input shouldn't be empty.");

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0) {
            const parentIndex = Math.floor((j - 1) / 2);
            if (arr[parentIndex] >= arr[j]) break;

            [arr[parentIndex], arr[j]] = [arr[j], arr[parentIndex]];
            j = parentIndex;
        }
    }
    return arr;
};

export default createMaxHeap;

//---------------- TEST CASES ------------//
const heapInputs = [
    [[5, 15, 60, 2, 30, 17, 40], 60],
    [[1, 2, 5, 2, 4], 5],
];

test.each(heapInputs)(
    "Heap is created for %o. Top value is %i",
    (inputArray, expected) => {
        expect(createMaxHeap(inputArray)[0]).toBe(expected);
    }
);

test("Empty throws error", () => {
    expect(() => createMaxHeap([])).toThrow(
        new Error("Input shouldn't be empty.")
    );
});
