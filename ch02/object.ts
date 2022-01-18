const person: object = {
  name: 'Michael Jackson',
  age: 20
}
const person2: object = {
  isOpen: false
}
const person3: object = [1, 2, 3]
const person4: object = new Date()

const person5: {
  name: string
  age: number
} = {
  name: 'Michael Jackson',
  age: 20
}

// console.log(person.height) // Property 'height' does not exist on type 'object'.

const person6: { name: string; age: number; } = {
  name: 'Michael Jackson',
  age: 20
}

// const person7: { name: string, age: number, height: number } = {
//   name: 'Michael Jackson',
//   age: 20
// }
// Property 'height' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; height: number; }'.

const person8: { name: string, age: number, height?: number } = {
  name: 'Michael Jackson', age: 20
}

const person9: { name: string, age: number, height?: number } = {
  name: 'Michael Jackson', age: 20, height: undefined
}

const person10: { name: string, age: number } = {
  name: 'Michael Jackson', age: 20
}
person10.name = 'Stevie Wonder'

const person11: { readonly name: string, readonly age: number } = {
  name: 'Michael Jackson', age: 20
}
// person11.name = 'Stevie Wonder' // Cannot assign to 'name' because it is a read-only property.
