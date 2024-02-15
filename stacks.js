// push and pop with array
let stack = {
    arr:[],
    top:-1,
    push:function(num){
        this.top++
        this.arr[this.top] = num
    },
    pop:function(){
        this.top--
        this.arr.pop()
    }
}

stack.push(4)
stack.pop()
stack.push(4)

console.log(stack.arr)


// push and pop with linked list

class Node {
    constructor(number){
        this.number = number
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.top = null
    }

    push(num){
        let temp = new Node(num)

        if(temp === null){
            return -1
        }

        temp.next = this.top

        this.top = temp
    }

    pop(){
        let temp = this.top

        if(temp === null){
            console.log("empty")
            return
        }

        this.top = this.top.next
    }

    display(){
        if(this.top === null){
            console.log("linked list is empty")
            return
        }
        else{
            let temp = this.top

            while(temp){
                console.log(temp.number,"->");
                temp = temp.next
            }
        }
    }

}


let linkedList = new LinkedList()

linkedList.push(5)
linkedList.push(3)
linkedList.push(4)


linkedList.display()

linkedList.pop()

linkedList.display()