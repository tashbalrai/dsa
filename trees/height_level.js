function Node(data = null, left = null, right = null) {
    return {
        left,
        data,
        right
    }
}

const root = new Node("A");

root.left = new Node("B");
root.right = new Node("C");

root.left.left = new Node("D");
root.left.right = new Node("E");

root.right.left = new Node("F");
root.right.right = new Node("G");

function height(node) {
    if (!node) {
        return -1; //empty tree has -1 height
    }

    return Math.max(height(node.left), height(node.right)) + 1;
}

function getLevel(node) {
    return height(node) + 1;
}

console.log('HEIGHT: ')
console.log(height(root), getLevel(root));