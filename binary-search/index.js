// Factory function for Node
const Node = (value, leftChild = null, rightChild = null) => {
    return {
        value,
        leftChild,
        rightChild
    }
}

// TODO: build a tree factory function which accepts an array when initialized
// Tree Factory Function
const Tree = (array) => {
    const root = buildTree(array)
    return {
        getRoot: () => root
    }
}

// Function that takes an array and turns it into a balanced BST










const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };