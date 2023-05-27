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
    const sortedArray = array.sort((a, b) => a - b)
    if (sortedArray.length === 0) {
      return null;
    }
    const midIndex = Math.floor(sortedArray.length / 2);
    const node = Node(sortedArray[midIndex]);
    node.leftChild = buildTree(sortedArray.slice(0, midIndex));
    node.rightChild = buildTree(sortedArray.slice(midIndex + 1));
    return node;
}

// Print the tree in the console
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
//let test = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9])
prettyPrint(test.getRoot()) 