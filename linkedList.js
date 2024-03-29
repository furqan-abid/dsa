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

let list = new Node(0);
list.next = null;
list = push(list, 1);
list = push(list, 1);
list = push(list, 2);
list = push(list, 3);

printList(list);

// delete node from linked list

const deleteNode = (node, position) => {
  let count = 1;
  let prev = null;
  let curr = node;

  while (node) {
    if (count === position) {
      if (!prev) {
        curr = curr.next;
        return node;
      } else {
        prev.next = curr.next;
        return node;
      }
    }
    prev = curr;
    curr = curr.next;
    count++;
  }

  return node;
};

// let deleted = deleteNode(list,3)

// printList(deleted)

const findingMiddleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    return slow.number;
  }
};

console.log(findingMiddleNode(list));

// reversing a linkedlist

const reverseLinkedList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let curr = head;
  let next = null;
  let prev = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// let reversedList = reverseLinkedList(list)

// printList(reversedList)

// reversing list with recursion

const reverseWithRecursion = (head) => {
  if (head === null || head.next === null) return head;

  let rest = reverseWithRecursion(head.next);

  head.next.next = head;
  head.next = null;

  return rest;
};

// let reversedList = reverseWithRecursion(list)

// printList(reversedList)

// removing duplicates from sorted link list through iterative approach

const removingDuplicates = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  // we have to declare it as if we use head with curr it will change positoin of head and we will just get 0 than
  let curr = head;

  while (curr.next) {
    if (curr.number == curr.next.number) {
      let next_next = curr.next.next;
      curr.next = next_next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

// printList(removingDuplicates(list))

// remove duplicates from sorted linked list through recursive approach

const removingDuplicatesRecursive = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  if (head.number === head.next.number) {
    let next_next = head.next.next;
    head.next = next_next.next;
    head = removingDuplicatesRecursive(head);
  } else {
    head.next = removingDuplicates(head.next);
  }
  console.log(head);

  // it changes the head with return every time from 0 to 1 to 2 to 3
  return head;
};

printList(removingDuplicatesRecursive(list));

// finding nth node from end of linked list through iterative approach

const findingNthNode = (head, n) => {
  let count = 1;
  var curr = head;

  while (curr.next) {
    count++;
    curr = curr.next;
  }

  if (n > count) {
    return -1;
  }
  let position = count - n;

  curr = head;
  for (let i = 0; i < position; i++) {
    curr = curr.next;
  }

  return curr.number;
};

console.log(findingNthNode(list, 3));

// finding nth node from end of linked list through two pointers approach

const findingNthNodePointers = (head, n) => {
  let first = head;
  let second = head;

  for (let i = 1; i < n; i++) {
    second = second.next;
  }

  while (second.next) {
    first = first.next;
    second = second.next;
  }

  return first.number;
};

console.log(findingNthNodePointers(list, 3));

// add two numbers represented by linked list

const numbersReverse = (head) => {
  if (!head || !head.next) return head;

  let rest = numbersReverse(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
};

const addTwoNumbers = (first, second) => {
  if (!first && !second) return null;

  first = numbersReverse(first);
  second = numbersReverse(second);

  let temp = null;
  let tail = null;
  let head = null;
  let carry = 0;

  while (first != null || second != null) {
    sum = carry + (first ? first.number : 0) + (second ? second.number : 0);
    if (sum >= 10) {
      carry = 1;
    }
    sum = sum % 10;

    temp = new Node(sum);

    if (head === null) {
      head = temp;
    } else {
      tail.next = temp;
    }

    tail = temp;

    if (first) first = first.next;
    if (second) second = second.next;
  }

  head = numbersReverse(head);
  console.log(head);
  return head;
};

let first = new Node(0);
first.next = null;
first = push(first, 9);
first = push(first, 1);

let second = new Node(5);
second.next = null;
second = push(second, 2);

printList(addTwoNumbers(first, second));

// cycle detection by floyd cycle

const cycleDetection = (head) => {
  let first = head;
  let second = head;

  while (second || second.next) {
    first = first.next;
    second = second.next.next;
    if (first === second) {
      return true;
    }
  }
  return false;
};

let cycle = new Node(5);
let cycle1 = new Node(3);
let cycle2 = new Node(2);

cycle.next = cycle1;
cycle1.next = cycle2;
cycle2.next = cycle;

console.log(cycleDetection(cycle));

// check if linked list is palindrom

const checkPalindrom = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = numbersReverse(slow);

  let temp = head;
  while (slow) {
    if (slow.number != temp.number) {
      console.log("first");
      return false;
    }
    slow = slow.next;
    temp = temp.next;
  }
  return true;
};

let node = new Node(1);
node.next = null;
node = push(node, 2);
node = push(node, 1);

console.log(checkPalindrom(node));

// delete node with out head pointer

let node0 = new Node(5);
let node1 = new Node(3);
let node2 = new Node(2);

node0.next = node1;
node1.next = node2;
node2.next = null;

const deleteNodeWithoutHead = (node) => {
  if (node.next == null) {
    return;
  }
  let prev = node;
  let curr = node.next;
  let next = node.next.next;

  prev.number = curr.number;
  prev.next = next;
};

// deleteNodeWithoutHead(node1)
// console.log(node0);

// merge two sorted linked list

const mergeList = (node1, node2) => {
  if (node1 === null) return node2;
  if (node2 === null) return node1;

  if (node1.number > node2.number) {
    let temp = node1;
    node1 = node2;
    node2 = temp;
  }

  let ans = node1;

  while (node1 && node2) {
    let temp = node1;

    while (node1 && node1.number <= node2.number) {
      temp = node1;
      node1 = node1.next;
    }

    temp.next = node2;

    let tmp = node1;
    node1 = node2;
    node2 = tmp;
  }
  return ans;
};

let merge = new Node(10);
merge.next = null;
merge = push(merge, 5);
merge = push(merge, 3);
merge = push(merge, 1);

let merge2 = new Node(6);
merge2.next = null;
merge2 = push(merge2, 4);
merge2 = push(merge2, 2);

printList(mergeList(merge, merge2));
