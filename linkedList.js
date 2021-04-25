class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add to end of list
  append(value) {
    // if no tail
    if (!this.tail) {
      this.head = this.tail = new Node(value, null, null);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  //add node to start of list
  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head = oldHead;
    }
  }

  deleteHead() {
    if (!this.head) return null;

    let removedHead = this.head;
    // if one node left
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      (this.head = this.head.next), (this.head.prev = null);
    }
    return removedHead.value;
  }

  deleteTail() {
    // if list is empty
    if (!this.head) return null;

    let removedTail = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
    }
  }

  searchNode(value) {
    let currentNode = this.head;

    // while (currentNode !== value) {

    // }
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode === currentNode.next;
      }
    }

    return null;
  }
}

let list = new LinkedList();
// list.append(1);
list.prepend(0);
console.log(list);
// list.append(2);
// list.append(3);

// console.log(list);

// list.prepend(-1);

// console.log(list);
