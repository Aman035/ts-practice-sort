class Sorter {
  collection: number[]
  constructor(collection: number[]) {
    this.collection = collection
  }
  sort() {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        //LOGIC FOR NUMBERS
        if (this.collection[j] > this.collection[j + 1]) {
          const tmp = this.collection[j]
          this.collection[j] = this.collection[j + 1]
          this.collection[j + 1] = tmp
        }
        //todo LOGIC FOR STRINGS
        // todo LOGIC FOR LINED LIST
      }
    }
  }
}
const sorter = new Sorter([10, -10, 4, 3, -20])
sorter.sort()
console.log(sorter.collection)
