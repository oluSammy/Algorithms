function reverseLinkedList(head) {
  const newArr = [];

  newArr.push(head);
  let currentNode = head;
  while (currentNode.next) {
    newArr.push(currentNode.next);

    currentNode = currentNode.next;
  }

  const revesrsedArr = newArr.reverse();

  for (i = 0; i < revesrsedArr.length; i++) {
    if (i < revesrsedArr.length - 1) {
      newArr[i].next = newArr[i + 1];
    } else {
      newArr[i].next = null;
    }
  }

  return revesrsedArr[0];
}
