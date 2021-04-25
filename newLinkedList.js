class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail
      this.tail.prev = ldTail
    }
  }

  prepend(value) {
    if(!this.head) {
      this.head = new Node(value);
      this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
      oldHead.prev = this.head
    }
  }

  deleteHead() {
    let removedHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.removedHead.next;
      this.head.prev = null;
    }

    return removedHead;
  }

  removeTail() {
    let removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = head;
      this.tail = tail
    } else {
      this.tail = removedHead.prev;
      this.tail = null;
    }

    return this.removeTail;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      } else {
        currentNode === currentNode.next
      }
    }
  }

  deleteNode(value) {
    
  }
}