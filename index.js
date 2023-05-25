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

    return {
        append,
        prepend,
        size,
        headNode,
        tail,
        at,
        pop,
        contains
    }
}

const testList = LinkedList()
testList.append(5)

console.log(testList.size)