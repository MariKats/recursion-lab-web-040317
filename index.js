function printString(string){
  console.log(string[0])
  if(string.length > 1){
    string = string.slice(1)
    printString(string)
  } else {
    return true
  }
}

function reverseString(string){
  if (string.length > 0) {
    return string[string.length-1] + reverseString(string.slice(0,-1))
  } else {
    return ""
  }
}

function isPalindrome(string){
  if(string.length < 2) return true
  if(string[0]===string[string.length-1]) return isPalindrome(string.slice(1,-1))
  else return false
}

function addUpTo(array, index){
  if(index > 0){
    return array[index] + addUpTo(array, index-1)
  } else {
    return true
  }
}

function maxOf(array){
  if(array.length > 1){
    array[0] > array[array.length-1] ? array.pop() : array.shift()
    maxOf(array)
  }
  return array[0]
}

function includesNumber(array, n){
  if (array.length<=0) return false
  else if (array[0]===n) return true
  else return includesNumber(array.splice(1), n)
}
