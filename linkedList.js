// creating a linked list

class Node {
  constructor(number) {
    this.number = number;
    this.next = null;
  }
}

const push = (head, number) => {
  const node = new Node(number);
  node.next = head;
  head = node;
  return head;
};

const printList = (head) => {
  while (head) {
    if (head.next === null) console.log(`[${head.number}] [${head}]->(nil)`);
    else console.log(`[${head.number}] [${head}]->${head.next}`);
    head = head.next;
  }
};

let list = new Node(0)
list.next = null
list = push(list,1)
list = push(list,2)
list = push(list,3)

printList(list)


// delete node from linked list

const deleteNode = (node,position) => {
let count = 1
let prev = null
let curr = node

while(node){
  if(count === position){
    if(!prev){
      curr = curr.next
      return node
    }
    else{
      prev.next = curr.next
      return node
    }
  }
  prev = curr
  curr = curr.next
  count++
}

return node
}

// let deleted = deleteNode(list,3)

// printList(deleted)

const findingMiddleNode = (head) =>{
  let slow = head
  let fast = head

  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
    return slow.number
  }

}

console.log(findingMiddleNode(list));