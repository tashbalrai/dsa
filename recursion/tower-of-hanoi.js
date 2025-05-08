function towerOfHanoi(n, source, target, auxiliary) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
    return;
  }
  towerOfHanoi(n - 1, source, auxiliary, target);
  console.log(`Move disk ${n} from ${source} to ${target}`);
  towerOfHanoi(n - 1, auxiliary, target, source);
}


// Example usage
const n = 4 ; // Number of disks
const source = 'A'; // Source rod
const target = 'C'; // Target rod
const auxiliary = 'B'; // Auxiliary rod
towerOfHanoi(n, source, target, auxiliary);
// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
// Explanation:
// The function moves n disks from the source rod to the target rod using the auxiliary rod.
// The base case is when there is only one disk to move, in which case it moves directly from the source to the target.
// For more than one disk, it first moves n-1 disks from the source to the auxiliary rod,
// then moves the nth disk from the source to the target rod, and finally moves the n-1 disks from the auxiliary rod to the target rod.
// This is a classic problem in recursion and demonstrates the power of recursive algorithms.
// The time complexity of this algorithm is O(2^n), where n is the number of disks.
// The space complexity is O(n) due to the recursion stack.