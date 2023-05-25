// Factory Function
const nodeList = (value = null, nextNode = null) => {
    return {
        value,
        nextNode
    }
}

const LinkedList = () => {
    let head = null
    let length = 0

    // Adds new node at the end of the list
    const append = (value) => {
        const newNode = nodeList(value)
        // Check if head exists
        if (head === null) {
            head = newNode
        // If it does, look at the next node in the list
        } else {
            let pointer = head
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode
            }
            pointer.nextNode = newNode
        }
        length++
    }

    // Adds new node to the start of the list
    const prepend = (value) => {
        const newNode = nodeList(value)

        if(head === null) {
            head = newNode
        } else {
            let pointer = head
            newNode.nextNode = pointer
            head = newNode
        }
        length++
    }
    
    // Get size of linked list
    const size = () => length 

    const headNode = () => {
        if (head === null) {
            console.log("There's no head node")
        } else {
            return head
        }
    }
    // Shows node at end of the list
    const tail = () => {
        if(head === null) {
            console.log("There's no tail")
        } else {
            let pointer = head
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode
            }
            return pointer
        }
    }

    // Returns node at specified index
    const at = (index) => {
        if (head === null) {
            console.log("There is no linked list")
        } else {
            let pointer = head
            for (let i = 0; i < index; i++) {
                if (pointer.nextNode === null) {
                    return "There's no item at that index"
                } else {
                    pointer = pointer.nextNode
                }
            }
            return pointer
        }
    }
    
    // Removes node from end of the list
    const pop = () => {
        if (head === null) {
            console.log("There's no head node")
        } else {
            let pointer = head
            while (pointer.nextNode.nextNode !== null) { // Looks two nodes ahead to check if not = to null
                pointer = pointer.nextNode
            }
            pointer.nextNode = null
            length--
        }
    }

    // Checks if value is in the list
    const contains = (value) => {
        if (head === null) {
            return false
        } else {
            let pointer = head
            while (pointer.nextNode !== null) {
                if (pointer.value === value) {
                    return true
                }
                pointer = pointer.nextNode
            }
            // Check if the value is true or false
            if (pointer.nextNode !== value) {
                return false
            } else {
                return true
            }
        }
    }

    // returns the index of the node containing value, or null if not found
    const find = (value) => {
        if (head === null) {
            console.log("There's no linked list")
        } else {
            let pointer = head
            let index = 0
            while (pointer.nextNode !== null) {
                if (pointer.value === value) {
                    return index;
                }
                index++ // Move index to the next node
                pointer = pointer.nextNode
            }
            if (pointer.value !== value) {
                console.log("This value cannot be found")
            } else return index;
        }
    }    

    // Represents your LindedList objects as strings, to print them out in the console
    const toString = () => {
        if (head === null) {
            console.log("There's no linked list")
        } else {
            let pointer = head
            let str = ""
            while (pointer.nextNode !== null) {
                str = str + `( ${pointer.value} ) -> `
                pointer = pointer.nextNode
            }
            str = str + `( ${pointer.value} ) -> null`
            return str
        }
    }

    return {
        append,
        prepend,
        size,
        headNode,
        tail,
        at,
        pop,
        contains,
        find, 
        toString
    }
}


// Test scripts
const testList = LinkedList()
testList.append(2)
testList.append(3)
testList.append(4)
testList.append(5)
testList.prepend(9)
testList.prepend(8)
testList.prepend(7)
testList.prepend(6)


console.log(testList.size)
console.log(testList.headNode)
console.log(testList.at(1));
console.log(testList.find(10));
console.log(testList.tail());
console.log(testList.toString());