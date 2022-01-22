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
