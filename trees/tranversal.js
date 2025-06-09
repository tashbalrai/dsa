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

// root.right.right.left = new Node("H");

function inOrder(node) {
    if (!node) {
        return;
    }

    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
}

console.log('IN-ORDER');
inOrder(root)

function preOrder(node) {
    if(!node) {
        return;
    }

    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
}

console.log('PRE-ORDER:')
preOrder(root);


function postOrder(node) {
    if(!node) {
        return;
    }

    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
}

console.log("POST-ORDER:")
postOrder(root);



