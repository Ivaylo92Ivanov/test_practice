const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require("./test_functions")

// capitalize function test cases

test('Capitalize: first letter is capital', () => {
  expect(capitalize("string")).toEqual("String")
  }
)

test('Capitalize: all other letters are remaining in same case', () => {
  expect(capitalize("another_STRING")).toEqual("Another_STRING")
  }
)

// reverse string function test cases

test("reverseString: string is reversed", () => {
  expect(reverseString("qwerty")).toEqual("ytrewq")
})

// calculator object test cases

test('Calculator: add', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('Calculator: subtract', () => {
  expect(calculator.subtract(5, 1)).toBe(4)
})

test('Calculator: divide (normal)', () => {
  expect(calculator.divide(6, 2)).toBe(3)
})

test('Calculator: divide (by 0)', () => {
  expect(calculator.divide(5, 0)).toBe(undefined)
})

test('Calculator: multiply)', () => {
  expect(calculator.multiply(5, 5)).toBe(25)
})

// caesar cipher function test cases

test('caesarCipher: letters in range a - z', () => {
  expect(caesarCipher('abcd, efgh!', 4)).toEqual('EFGH, IJKL!')
})

test('caesarCipher: letters out of range a - z', () => {
  expect(caesarCipher('wxyz!', 99)).toEqual('RSTU!')
})

test('caesarCipher: punctuation', () => {
  expect(caesarCipher('.. ,  ! " ] }', 4)).toEqual('.. ,  ! " ] }')
})

test('caesarCipher: numbers', () => {
  expect(caesarCipher('12 3 2 1 4 5', 4)).toEqual('12 3 2 1 4 5')
})

// analyze array function

// An analyzeArray function that takes an array of numbers 
// and returns an object with the following properties: 
// average, min, max, and length.

test("Analyze array: average", () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toEqual(4)
})

test("Analyze array: min", () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toEqual(1)
})

test("Analyze array: max", () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toEqual(8)
})

test("Analyze array: length", () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toEqual(6)
})