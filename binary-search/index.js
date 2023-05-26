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