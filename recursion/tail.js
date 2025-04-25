/*
    --------------------
    Tail Recursion
    --------------------
    Tail recursion is a type of recursion where the recursive call is made after all other operations in the function.
    This ensures that the function processes the current value before making the recursive call.
    Tail recursion is often used when you want to process the current value first and then move to the next recursive step.

    In this example, the function tail(n) will print the value of `n` before calling itself with n-1.
    This ensures that the numbers are printed in descending order, as the recursive calls are made after the current operation.

    --------------------
    Example:
    tail(10) => 10 9 8 7 6 5 4 3 2 1
    --------------------
    Time Complexity: O(n)
    Space Complexity: O(n)
    --------------------

    Time Complexity Analysis:
    - The function makes exactly one recursive call for each value of `n` until it reaches the base case (n <= 0).
    - Each recursive call performs a constant amount of work (the `process.stdout.write` operation).
    - Therefore, the time complexity is O(n), where `n` is the input value.

    Space Complexity Analysis:
    - Each recursive call adds a new stack frame to the call stack.
    - The maximum depth of the recursion is equal to `n`, so the space complexity is O(n).
    - Note: In some languages, tail-call optimization (TCO) can reduce the space complexity to O(1), but JavaScript does not guarantee TCO.

    Tree Tracing:
    - The recursion can be visualized as a tree where each node represents a function call.
    - For tail recursion, the tree is linear because there is only one recursive call per function invocation.

    Example for tail(3):
    tail(3)
    └── Print 3
        └── tail(2)
            └── Print 2
                └── tail(1)
                    └── Print 1
                        └── tail(0) [Base case, returns]

    Execution Order:
    - The current value is printed first (tail(3) → Print 3, tail(2) → Print 2, tail(1) → Print 1).
    - The recursive calls are made after the current operation, so the numbers are printed in descending order.

    In tail recursion, instructions are executed in descending order because the recursive call is made after the current operation.
    Unlike head recursion, tail recursion does not require the function to "unwind" the stack to process the values.
    However, in JavaScript, tail-call optimization (TCO) is not guaranteed, so the space complexity remains O(n).

    A typical stack looks like this during execution:
    +----------------+
    | tail(1)        | <- Top of the stack (last call, n = 1) printed last
    +----------------+
    | tail(2)        | <- n = 2 at this stack frame
    +----------------+
    | tail(3)        | <- n = 3 at this stack frame
    +----------------+
    | tail(4)        | <- n = 4 at this stack frame
    +----------------+
    | tail(5)        | <- n = 5 at this stack frame
    +----------------+
    | tail(6)        | <- n = 6 at this stack frame
    +----------------+
    | tail(7)        | <- n = 7 at this stack frame
    +----------------+
    | tail(8)        | <- n = 8 at this stack frame
    +----------------+
    | tail(9)        | <- n = 9 at this stack frame
    +----------------+
    | tail(10)       | <- Bottom of the stack (first call, n = 10) printed first
    +----------------+
*/

function tail(n) {
  if (n <= 0) return;

  process.stdout.write(n + " "); // Print before the recursive call
  tail(n - 1); // Recursive call
}

tail(10);
process.stdout.write("\n");