import { BADFLAGS } from "dns";
import Node from "./node.js"

const root = new Node(100);

function insertBST(root, value) {
    if(!root) {
        return new Node(value);
    }

    if (value > root.data) {
        root.right = insertBST(root.right, value)
    } else if (value < root.data) {
        root.left = insertBST(root.left, value)
    }

    return root;
}

console.log(insertBST(root, 200));
console.log(insertBST(root, 90));
console.log(insertBST(root, 80));
console.log(insertBST(root, 110));

function isFullBinaryTree(node) {
    if (!node) {
        return true;
    }

    if (node.left === null && node.right === null) {
        return true;
    }

    if (node.left !== null && node.right !== null) {
        return isFullBinaryTree(node.left) && isFullBinaryTree(node.right);
    }

    return false;
}

console.log("Is Full Binary Tree: ", isFullBinaryTree(root));

function bfs(root) {
    const queue = [root];
    let seenNull = false;

    while(queue.length) {
        const node = queue.shift();

        if (!node) continue;
        console.log(node.data);

        if (seenNull) {
            console.log("Not a complete binary tree.")
        }
        
        queue.push(node.left);
        queue.push(node.right);
    }
}

bfs(root)

function dfs(root) {
    const stack = [root];

    while(stack.length) {
        const node = stack.pop();

        console.log(node.data);

        if(node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }
}

dfs(root);