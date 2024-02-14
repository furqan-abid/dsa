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
