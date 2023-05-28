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
    
    

    // Method that takes an array and turns it into a balanced BST
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
    const root = buildTree(array)
    
    // Method to add node to array
    const insertNode = (value, node = root) => {
        let newNode = Node(value)
        if (root === null) {
          return newNode
        }
        // Traverse the tree to find position for the new node
        let prev = null
        let pointer = node
        while (pointer !== null) {
          prev = pointer
          if (value < pointer.value) {
            pointer = pointer.leftChild
          } else if (value > pointer.value) {
            pointer = pointer.rightChild
          } else {
            // Handle case where node with same value already exists
            return node
          }
        }
        // Add the new node to the tree
        if (value < prev.value) {
          prev.leftChild = newNode
        } else {
          prev.rightChild = newNode
        } 
        return node
      }


    // Delete to remove node from array TODO
    
    return {
        root,
        buildTree,
        insertNode
    }
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
test.insertNode(44)
//let test = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9])
prettyPrint(test.root)