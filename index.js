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
    }


    const prepend = (value) => {
        const newNode = nodeList(value, head)
    }
}