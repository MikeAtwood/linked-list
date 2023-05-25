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

    const size = () => length 

    return {
        append,
        prepend,
        size
    }
}

const testList = LinkedList()
testList.append(5)

console.log(testList.size)