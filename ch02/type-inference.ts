let personName2 = 'Michael Jackson'
personName.toUpperCase()

let total = 123
const printTotal: (totalNum: number) => void = (totalNum: number): void => {
  console.log(`Total is ${totalNum}`)
}

printTotal(total)

let isPositive = 0 < total
const printIsPositive: (isPositiveFlag: boolean) => void = (isPositiveFlag: boolean): void => {
  if (isPositiveFlag) {
    console.log('Total is a positive number')
  } else {
    console.log('Total is not a positive number')
  }
}

printIsPositive(isPositive)

const nameList = ['dog', 'cat', 'bird']
nameList[0].toUpperCase()

const ageList = [20, 18, 15]
// ageList[0].toUpperCase() // Property 'toUpperCase' does not exist on type 'number'.

const person13 = {
  name: 'Michael Jackson',
  age: 20
}

const person13Name: string = person13.name
const person13Age: number = person13.age
// const person13Height: number = person13.height // Property 'height' does not exist on type '{ name: string; age: number; }'.

const sayHello3 = (name: string): string => {
  return `Hello, ${name}!`
}

const val1 = sayHello3('Michael Jackson')
// const val2 = sayHello3(123) // Argument of type 'number' is not assignable to parameter of type 'string'.

const someStrVal = 123 + '345' // string 型
const someNumVal = Number(someStrVal) * 10 // number 型

interface Person3 {
  firstName: string
  lastName: string
  age: number
}

const getFullName = (person: Person3) => {
  return `${person.firstName} ${person.lastName}`
}

const largeFullName = getFullName({ firstName: 'Michael', lastName: 'Jackson', age: 74}).toUpperCase()

const literalName: 'Michael Jackson' = 'Michael Jackson'
// const invalidLiteralName: 'MichaelJackson' = 'Stivie Wonder' // Type '"Stivie Wonder"' is not assignable to type '"MichaelJackson"'.
const uppreCaseName = literalName.toUpperCase()

const num: 123 = 123
// const invalidNum: 123 = 456 // Type '456' is not assignable to type '123'.

const personName3 = 'Michael Jackson'
const personName4 = 'Steivie Wonder'

const sayHelloToMichael = (personName: 'Michael Jackson') => {
  console.log(`Hello, ${personName3}`)
}

sayHelloToMichael(personName3)
// sayHelloToMichael(personName4) // Argument of type '"Steivie Wonder"' is not assignable to parameter of type '"Michael Jackson"'.

let personName5 = 'Michael Jackson'
let personName6 = 'Steivie Wonder'

// sayHelloToMichael(personName5) // Argument of type 'string' is not assignable to parameter of type '"Michael Jackson"'.
// sayHelloToMichael(personName6) // Argument of type 'string' is not assignable to parameter of type '"Michael Jackson"'.

const person14 = {
  name: 'Michael Jackson'
}

// sayHelloToMichael(person14.name) // Argument of type 'string' is not assignable to parameter of type '"Michael Jackson"'.

let personName7 = 'Michael Jackson'
personName7 = 'Steivie Wonder'

const person15 = {
  name: 'Michael Jackson'
}
person15.name = 'Steivie Wonder'
