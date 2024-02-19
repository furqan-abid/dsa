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

// check valide pranthesis

const validPranthesis = (arr) =>{

    let stack = []

    if(arr.length === 0){
        console.log("array is empty");
        return false
    }

    for(let i = 0 ; i< arr.length; i++){
        if(arr[i]==='(' || arr[i]==='{' || arr[i]==='['){

            stack.push(arr[i])
        }
        else{
            if(stack.length===0){
                console.log("array doesnt have pranthesis")
                return false
            }
                if(stack[stack.length-1]==='(' && arr[i]!==')')return false
                if(stack[stack.length-1]==='{' && arr[i]!=='}')return false
                if(stack[stack.length-1]==='[' && arr[i]!==']')return false

                stack.pop()
            
        }
    }
    return true

}

console.log(validPranthesis(['{','(','[',']',')','}']), validPranthesis(['{','(','[',']',')',')']));


// solving smallest number on left side

const smallestNumber = (arr) =>{
    let ans = []

    let stack = []

    for(let i = 0;i<arr.length;i++){
        while(stack.length!=0 && stack[stack.length-1]>=arr[i]){
            stack.pop()
        }
        if(stack.length===0){
            ans.push(-1)
        }
        else{
            ans.push(stack[stack.length-1])
        }

        stack.push(arr[i])
    }

    return ans
}

console.log(smallestNumber([1,6,2]))