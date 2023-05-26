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
const buildTree = (array) => {
    if (array.length === 0) {
        return null
    }
    if (array.length === 1) {
        return Node(array[0])
    }
    const mid = Math.floor(array.length / 2)
    const root = Node(array[mid])
    const leftSubtree = buildTree(array.slice(0, mid))
    const rightSubtree = buildTree(array.slice(mid, + 1))
    root.leftChild = leftSubtree
    root.rightChild = rightSubtree
    return root
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightChild !== null) {
      prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftChild !== null) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  // node test
let test = Tree([54, 32, 66, 133, 5, 25, 73, 43, 342])
prettyPrint(test.getRoot()) 