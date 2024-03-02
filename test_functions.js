// capitalize

function capitalize(string) {
  string = string.replace(string[0], string[0].toUpperCase());
  return string;
}

// reverseString

function reverseString(string) {
  let stringAsArr = Array.from(string);
  let resultString = "";
  while(stringAsArr.length>0) { resultString += stringAsArr.pop() };
  return resultString;
}

// calculator

const calculator = {
  add: (a, b) => a+b,
  subtract: (a , b) => a-b,
  divide: (a, b) => (b==0 ? undefined : a/b),
  multiply: (a, b) => a*b,
}

// caesarCipher

function caesarCipher(string, shiftFactor) {
  string = string.toUpperCase()
  let stringAsArr = Array.from(string)
  let cipheredString = "";
  for (let char of stringAsArr) {
    let charCode = char.charCodeAt()
    // if char in alphabet range, mutate with shift factor, else keep current char
    if ( ("A".charCodeAt() <= charCode) && (charCode <= "Z".charCodeAt()) ) {
      charCode += shiftFactor
      while ("Z".charCodeAt() < charCode) {charCode -= 26 } // keep charCode in alphabet range
      char = String.fromCharCode(charCode)
    };
    cipheredString += char
  }
  return cipheredString
  
}

// analyze array

function analyzeArray(arr) {
  const totalSum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0 
  );
  
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const length = arr.length
  const average = totalSum/length
  return {average, min, max, length}
}


module.exports = {
   capitalize, 
   reverseString,
   calculator,
   caesarCipher,
   analyzeArray
}