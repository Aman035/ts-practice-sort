import Sorter from './Sorter'

class Node {
  next: Node | null
  data: number
  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList extends Sorter {
  head: Node | null
  tail: Node | null
  length: number
  constructor() {
    super()
    this.head = null
    this.tail = null
    this.length = 0
  }
  //O(1) Add
  add(data: number) {
    if (!this.tail) {
      this.head = new Node(data)
      this.tail = this.head
    } else {
      const newTail = new Node(data)
      this.tail.next = newTail
      this.tail = newTail
    }
    this.length += 1
  }
  at(index: number): Node {
    let curr = this.head
    while (curr && index--) {
      curr = curr.next
    }
    if (!curr) throw new Error('Index Out of Bound!')
    return curr
  }
  compare(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)
    return leftNode.data > rightNode.data
  }
  //swap value rather than actual node
  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)
    leftNode.data = leftNode.data + rightNode.data
    rightNode.data = leftNode.data - rightNode.data
    leftNode.data = leftNode.data - rightNode.data
  }
  print() {
    let tmp = this.head
    while (tmp) {
      console.log(tmp.data)
      tmp = tmp.next
    }
  }
}
