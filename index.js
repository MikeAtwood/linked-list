const nodeList = (value = null, nextNode = null) => {
    return {
        value,
        nextNode
    }
}

const LinkedList = () => {
    let head = null
    let size = 0

    const append = (value) => {
        const newNode = nodeList(value)
        if (head === null) {
            head = newNode
        } else {
            let pointer = head
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode
            }
            pointer.nextNode = newNode
        }
        size++
    }


    const prepend = (value) => {
        const newNode = nodeList(value, head)
    }

    return {
        append
    }
}

const testList = LinkedList()
testList.append(5)

console.log(testList.size)