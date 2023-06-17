interface ICollection {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}
export default class Sorter {
  constructor(public collection: ICollection) {}
  sort() {
    for (let i = 0; i < this.collection.length; i++)
      for (let j = 0; j < this.collection.length - i - 1; j++)
        if (this.collection.compare(j, j + 1)) this.collection.swap(j, j + 1)
  }
}
