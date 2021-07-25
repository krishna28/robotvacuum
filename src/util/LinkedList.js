import Node from "./Node";
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = value => {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail = newNode;
      this.head.prev = this.tail;
    }
    this.length++;
    return newNode;
  };

  find = value => {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return current;
      } else {
        current = current.next;
      }
    }
    return undefined;
  };
}

let linkedList = new LinkedList();

linkedList.push("NORTH");
linkedList.push("EAST");
linkedList.push("SOUTH");
linkedList.push("WEST");

export default linkedList;
