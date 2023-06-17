import NumberCollection from './NumberCollection'
import CharacterCollection from './CharacterCollection'
import LinkedList from './LinkedList'

const numberCollection = new NumberCollection([-5, 10, -10, 2])
numberCollection.sort()
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('Testing')
characterCollection.sort()
console.log(characterCollection.data)

const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(50)
linkedList.add(-300)
linkedList.add(5100)
linkedList.sort()
linkedList.print()
