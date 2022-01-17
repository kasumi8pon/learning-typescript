const sayHello: (name: string) => string = (name: string): string => {
  return `Hello, ${name}!`
}

const sayGoodBye: (name: string, q: boolean) => string = (name: string, q: boolean): string => {
  return `GoodBye, ${name}${q ? ' ?' : ''}`
}

const sayHi: (name: string) => string = (personName: string): string => {
  return `Hello, ${personName}`
}

const text = sayHi('Ponta')

const logHello: () => void = (): void => {
  console.log('Hello!')
}

const undefinedVal: undefined = undefined
const voidVal: void = undefined

// OK
if (undefined) {
  console.log('UndefinedVal')
}

// エラー
// An expression of type 'void' cannot be tested for truthiness.
// if (voidVal) {
//   console.log('voidVal')
// }
