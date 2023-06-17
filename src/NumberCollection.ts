export default class NumberCollection {
  data: number[]
  length: number
  constructor(data: number[]) {
    this.data = data
    this.length = data.length
  }
  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex] > this.data[rightIndex]
  }
  swap(leftIndex: number, rightIndex: number) {
    const tmp = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = tmp
  }
}
