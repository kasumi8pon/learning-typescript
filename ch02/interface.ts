interface Person {
  name: string
  age: number
}

const person12: Person = {
  name: 'Michael Jackson',
  age: 20
}

// console.log(person.height) // Property 'height' does not exist on type 'object'.

interface Person1 {
  sayHello: (name: string) => void
}

interface Person2 {
  sayHello(name: string): void
}

// 別の interface として解釈される
interface anotherPerson {}
interface AnothrePerson {}

interface SayHello {
  (name: string): void
}

const sayHello2: SayHello = (name: string) => {
  console.log(`Hello, ${name}!`)
}

const getName = (person: { name: string; age: number }) => {
  return person.name
}

const getAge = (person: { name: string; age: number }) => {
  return person.age
}

const getName2 = (person: Person) => {
  return person.name
}

const getAge2 = (person: Person) => {
  return person.age
}
