const createMaxHeap = (inputArray) => {
    if (inputArray.length < 1)
        throw new Error("Input array shouldn't be empty.");

    for (let i = 1; i < inputArray.length; i++) {
        let currentIndex = i;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (inputArray[parentIndex] >= inputArray[currentIndex]) break;

            [inputArray[parentIndex], inputArray[currentIndex]] = [
                inputArray[currentIndex],
                inputArray[parentIndex],
            ];
            currentIndex = parentIndex;
        }
    }
    return inputArray;
};

const deleteFromHeap = (heap) => {
    if (heap.length < 1) {
        throw new Error("Input heap is empty.");
    }

    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();

    let parentIndex = 0;
    let maxChildIndex = 1;

    while (maxChildIndex < heap.length) {
        if (
            maxChildIndex + 1 < heap.length &&
            heap[maxChildIndex + 1] > heap[maxChildIndex]
        ) {
            maxChildIndex = maxChildIndex + 1;
        }

        if (heap[maxChildIndex] <= heap[parentIndex]) break;

        [heap[maxChildIndex], heap[parentIndex]] = [
            heap[parentIndex],
            heap[maxChildIndex],
        ];
        parentIndex = maxChildIndex;
        maxChildIndex = 2 * parentIndex + 1;
    }

    return top;
};

// ------------- TEST CASES ---------------
test("Empty throws error.", () => {
    expect(() => createMaxHeap([])).toThrow();
});

const caseData = [
    [[5, 2, 6, 9, 1, 7], 9],
    [[5, -7, 6, -9, 1, 7], 7],
];

test.each(caseData)(
    "Create heap for %o and top element is %i",
    (input, expected) => {
        expect(createMaxHeap(input)[0]).toBe(expected);
    }
);

test.each(caseData)(
    "Create heap for %o and top element is %i",
    (input, expected) => {
        expect(deleteFromHeap(input)).toBe(expected);
    }
);
