class Queue {
    constructor(){
        this.item = {},
        this.frontIndex = 0
        this.backIndex = 0
    }

    enqueue(item){
        this.item[this.backIndex] = item
        this.backIndex += 1
        return item
    }

    dequeue(){
        let item = this.item[this.frontIndex]
        delete this.item[this.frontIndex]
        this.frontIndex++
        return item
    }

    listItems(){
        return this.item
    }
    size(){
        return (this.backIndex - this.frontIndex)
    }
}

let queue = new Queue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)

console.log(queue.enqueue(3));


// reverse k elements in the queue

class Stack {
    constructor(){
        this.items = []
    }

    push(item){
        let temp = this.items.push(item)
        return temp
    }
    pop(){
        let temp = this.items.pop()
        return temp
    }
}

const removeKthElement = (k) =>{
    console.log(queue.listItems());

    let n = queue.size()
    let stack = new Stack

    for(let i = 0; i<k;i++){
        let temp = queue.dequeue()
        stack.push(temp)
    }

    for(let i = 0;i<k;i++){
        let temp = stack.pop()
        queue.enqueue(temp)
    }

    for(let i = 0;i<n-k;i++){
        let temp = queue.dequeue()
        queue.enqueue(temp)
    }

    console.log(stack,queue)
}
removeKthElement(3)