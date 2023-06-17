export default class CharacterCollection {
  data: string
  length: number
  constructor(data: string) {
    this.data = data
    this.length = data.length
  }
  compare(leftIndex: number, rightIndex: number) {
    return (
      // we don't want diff sorts for capital & lower chars
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    )
  }
  swap(leftIndex: number, rightIndex: number) {
    const characters = this.data.split('')
    const tmp = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = tmp
    this.data = characters.join('')
  }
}
