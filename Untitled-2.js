// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next || null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(value) {
//     if (!this.tail) {
//       this.head = new Node(value);
//       this.tail = new Node(value);
//       return new Node(value);
//     } else {
//       let oldTail = this.tail;
//       this.tail = new Node(value);
//       oldTail.next = this.tail;
//     }
//   }

//   prepend(value) {
//     if (!this.tail) {
//       this.head = new Node(value);
//       this.tail = new Node(value);
//     } else {
//       let oldHead = this.head;
//       this.head = new Node(value);
//       this.head.next = oldHead;
//     }
//   }

//   deleteHead() {
//     if (!this.head) return null;

//     let oldHead = this.head;
//     if (this.head === this.tail) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = oldHead.next;
//     }
//     return oldHead.value;
//   }

//   // deleteTail() {
//   //   if (!this.tail) return null;

//   //   let currentNode = this.head;

//   //   while (currentNode) {
//   //     if (currentNode.next === this.tail) {
//   //       currentNode = this.tail;
//   //       currentNode.next = null;
//   //     } else {
//   //       currentNode === currentNode.next
//   //     }
//   //   }

//   //   return 1

//   //   // let oldTail = this.tail;
//   //   // if (this.head === this.tail) {
//   //   //   this.tail = null;
//   //   //   this.head = null;
//   //   // } else {
//   //   //   this.tail = oldTail.prev;
//   //   // }
//   //   // return oldTail.value;
//   // }

//   // findNode(value) {
//   //   let currentNode = this.head;

//   //   while (currentNode) {
//   //     if (currentNode.value === value) {
//   //       return currentNode.value;
//   //     }
//   //     currentNode = currentNode.next;
//   //   }
//   //   return null;
//   // }

//   deleteNode(value) {
//     let currentNode = this.head;
//     let prevNode = {}

//     while (currentNode) {
//       if (currentNode.value === value) {
//         if (currentNode === this.head) {

//         }
//         prevNode.next = currentNode.next;
//       }
//       prevNode = currentNode;
//       currentNode = currentNode.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.append(3);
// list.prepend(0);
// list.prepend(-1);
// // list.deleteNode(-1)
// // list.deleteTail()
// // list.append(3);
// console.log(list);
// // list.prepend(0);
