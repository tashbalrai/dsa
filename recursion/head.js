/*
    --------------------
    Head Recursion
    --------------------
    Head recursion is a type of recursion where the recursive call is made before any other operations in the function.
    This means that the function will call itself before performing any other actions, such as printing or returning a value.
    This can be useful in certain situations where you want to perform an operation on the result of the recursive call,
    or when you want to ensure that the recursive calls are made before any other operations.
    For example, if you want to print the numbers from 1 to n in ascending order, you can use head recursion.

    In this example, the function head(n) will call itself with n-1 before printing n.
    This will ensure that the numbers are printed in ascending order, as the recursive calls will be made before any other operations.
    --------------------
    Example:
    head(10) => 1 2 3 4 5 6 7 8 9 10
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

    Tree Tracing:
    - The recursion can be visualized as a tree where each node represents a function call.
    - For head recursion, the tree is linear because there is only one recursive call per function invocation.

    Example for head(3):
    head(3)
    └── head(2)
        └── head(1)
            └── head(0) [Base case, returns]
            └── Print 1
        └── Print 2
    └── Print 3

    Execution Order:
    - The recursive calls are made first (head(3) → head(2) → head(1) → head(0)).
    - Once the base case is reached, the function starts returning and prints the values in reverse order of the calls.

    In head recursion, instructions are executed in ascending order because every function call is placed on the stack. Since the last function call is executed first, the first function call is executed last. 
    This is the reason why the output is in ascending order.

    For each function call, a new stack frame is created, and the function call is pushed onto the stack.
    When the base case is reached, the function starts to return, and the stack frames are popped off the stack in reverse order.

    a typical stack looks like this during execution:
    +----------------+
    | head(0)        | <- Top of the stack (last call)
    +----------------+
    | head(1)        |
    +----------------+
    | head(2)        |
    +----------------+
    | head(3)        |
    +----------------+
    | head(4)        |
    +----------------+
    | head(5)        |
    +----------------+
    | head(6)        |
    +----------------+
    | head(7)        |
    +----------------+
    | head(8)        |
    +----------------+
    | head(9)        |
    +----------------+
    | head(10)       | <- Bottom of the stack (first call)
    +----------------+
*/

function head(n) {
  if(n<=0) return;

  head(n-1);
  process.stdout.write(n + " ");
}

head(10);
process.stdout.write("\n");