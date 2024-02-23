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


// implement queue using stack

class QueueUsingStack {
    constructor(){
        this.items = []
        this.tempStack=[]
    }

    enqueue(item){
        let temp = this.items.push(item)
        return temp
    }

    dequeue() {
        if (this.isEmpty()) throw "Underflow";
    
        // Move all items from items stack to tempStack
        while (this.items.length > 0) {
            this.tempStack.push(this.items.pop());
        }
    
        // Pop the front of the queue (which is now at the top of tempStack)
        this.tempStack.pop();
    
        // Move all items back to items stack
        while (this.tempStack.length > 0) {
            this.items.push(this.tempStack.pop());
        }
    
        return this.items.length;
    }

    isEmpty(){
        if(!this.items){
            return true
        }
        return false
    }
}

let queueStack = new QueueUsingStack

queueStack.enqueue(2)
queueStack.enqueue(3)
queueStack.enqueue(4)
console.log("this is item",queueStack.items)
queueStack.dequeue()

// console.log(queueStack.items)

// find kth number using 1 and 2

const findKthNumber = (k) =>{
    let queue = new Queue
    queue.enqueue("1")
    queue.enqueue("2")

    let ans = 0
    for(let i = 1; i <= k; i++){
        let temp = queue.dequeue()
        ans = temp
        queue.enqueue(temp+"1")
        queue.enqueue(temp+"1")
    }
    return ans
}

console.log("kth number",findKthNumber(5))

// finding the kth palindrome of even length using 1 and 2

const findKthPalindrome = (k) =>{
    let queue = new Queue
    queue.enqueue("11")
    queue.enqueue("22")
    let ans = null

    for(let i = 1 ; i<k;i++){
        let temp = queue.dequeue()
        ans = temp
        let first = temp.substring(0,temp.length/2)
        let second = temp.substring(temp.length/2,temp.length)

        queue.enqueue(first+"11"+second)
        queue.enqueue(first+"22"+second)
    }
    return ans
}

console.log(findKthPalindrome(5))