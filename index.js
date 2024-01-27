// this is firctorial recursion
const fictorial = (n) =>{

  if(n===1){
    return 1
  }
  let temp = fictorial(n-1)*n

  return temp
}

console.log("this is fictorial",fictorial(5));

// finding exponential value recursion

const exponential = (n) =>{
  let temp;
  if(n===0){
    temp = 1
    return temp;
  }
  temp = 2 * exponential(n-1)

  console.log(temp);
  return temp
}

console.log("this is exponential",exponential(4))

// fibonaci series

const fibonacci = (n) =>{
  console.log(n)
  if(n===0){
    return 0;
  }
  if(n===1){
    return 1
  }

  
  let first = fibonacci(n-1)
  let second = fibonacci(n-2)

  return first + second;
}

console.log("this is fibonacci",fibonacci(5))


// palindrom

const palindromeHelper = (string,start,end) =>{
  if(start >= end){
    return true
  }
  if(string[start] !== string[end]){
    return false
  }
  return palindromeHelper(string, start+1 , end -1 )
}

const palindrome = (string) =>{
  let start = 0
  let end = string.length - 1
  return palindromeHelper(string,start,end)

}
console.log(palindrome("furqan"))

// reverse and array

const reverseArrayHelper = (arr,start,end)=>{

  if(start >= end){
    return arr
  }
  let temp = arr[start];
  arr[start] = arr[end]
  arr[end] = temp

  return reverseArrayHelper(arr,start+1,end-1)
}

const reverseArray = (arr) =>{
  let start = 0
  let end = arr.length-1
  return reverseArrayHelper(arr,start,end)
}

console.log(reverseArray([2,3,1,4,5,3]));