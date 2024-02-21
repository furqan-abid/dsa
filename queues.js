class Queue {
    constructor(){
        this.item = {},
        this.frontIndex = 0
        this.backIndex = 0
    }

    enqueue(item){
        this.item[this.backIndex] = item
        this.backIndex += 1
        return item + "inserted"
    }

    dequeue(){
        let item = this.item[this.frontIndex]
        delete this.item[this.frontIndex]
        this.frontIndex++
        return item + "deleted"
    }

    listItems(){
        return this.item
    }
    size(){
        return (this.backIndex - this.frontIndex)
    }
}

let queue = new Queue
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.enqueue(3));


console.log(queue.listItems());

console.log(queue.size());