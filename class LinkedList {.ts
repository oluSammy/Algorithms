class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  addMany(values: number[]): LinkedList {
    let current: LinkedList = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes: number[] = [];
    let current: LinkedList | null = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }

  removeNode(number) {
    const nodes: number[] = [];
    let current: LinkedList | null = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }

    const reversedArr: number[] = nodes.reverse();
    reversedArr.splice(3, 1);
  }
}

console.log(new LinkedList(0).addMany([1, 2]));
