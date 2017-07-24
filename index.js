function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string){
  let split = string.split("")
  let arr = []
  while (split.length > 0 ) {
  var last = split.pop()
  arr.push(last)
  }
  return arr.join("")
}

function reverseString(myString){
   if (myString.length > 0){
     return reverseString(myString.slice(1)) + myString[0]
   } else {
     return ""
   }
}

function isPalindrome(myString){
 if (myString.length > 1) {
  if (myString[0] !== myString[myString.length-1]){
   return false
   } else {
     isPalindrome(myString.slice(1,-1))
     return true
   }
 } else {
   return false
 }
}

function addUpTo(arr, index) {
  if (index) {
    return arr[index] + addUpTo(arr, --index)
  } else {
    return arr[index]
  }
}

function maxOf(arr){
if (arr.length===1){return arr[0]}
  else {
    arr[0] < arr[arr.length-1] ? arr = arr.slice(1) : arr = arr.splice(0, arr.length-1)
    return maxOf(arr)
  }
}

function includesNumber(arr, n){
  if (arr.length>1) {
    return arr[0] === n ? true : includesNumber(arr.slice(1), n)
  }
  else {
    return false
  }
}
