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

// subsequences

const subsequencesHelper = (string,newString,index)=>{
  if(string.length == index){
    console.log(newString)
    return
  }

  // take
  subsequencesHelper(string,newString+string[index],index+1)

  // no take
  subsequencesHelper(string,newString,index+1)
}

const subsequences = (string) =>{

  subsequencesHelper(string,"",0)
}

console.log("subsequence",subsequences("abc"))

// sub sets of array
let mainArr = []
const subSetHelper = (arr,newArr,index) =>{

  if(arr.length == index){
    mainArr.push(newArr.slice())
    return 
  }
  newArr.push(arr[index])
  subSetHelper(arr,newArr,index+1)

  newArr.pop()
  subSetHelper(arr,newArr,index+1)
  return
}

const subSets = (arr) =>{

  return subSetHelper(arr,[],0)
}

subSets([1,2,3,4])

console.log(mainArr);


// finding the sum in subset of array 

const sumFinderHelper = (arr,sum,tempSum,index) =>{
console.log(arr,sum,tempSum,index)
  if(index==arr.length){
    return false
  }
  if(sum==tempSum){
    return true
  }


  // take
  let call1 = sumFinderHelper(arr,sum,tempSum+arr[index],index+1)

  // no take

  let call2 = sumFinderHelper(arr,sum,tempSum,index+1)

  return call1 || call2
}
const sumFinder = (sum,arr) =>{
console.log(sum,arr);

return sumFinderHelper(arr,sum,0,0)
}

let sum = 9
let arr = [1,2,3,3,1,5]


console.log(sumFinder(sum,arr))


// permutations

const swap = (nums,i,j) => {
  let temp = nums[i];
  nums[i]=nums[j];
  nums[j]=temp;
}
const permutationsHelper = (nums,i) =>{
  if(nums.length==i){
    console.log("break")
    return
  }

  for(let j=i;j<nums.length;j++){
    swap(nums,i,j)
    console.log("before",i,j,nums)
    permutationsHelper(nums,i+1)
    swap(nums,j,i);
    console.log("after",i,j,nums)
  }
}
const permutations = (nums) =>{
permutationsHelper(nums,0)
}
permutations([1,2,3])

// keypad

let keys = ["","",'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
let ans = []

const keypadHelper = (nums,n,temp,i)=>{
  if(n===i){
    ans.push(temp)
    return
  }

  for(let j=0;j<nums.length;j++){
    keypadHelper(nums,n,temp + keys[nums[i]][j],i+1)
  }
}
const keypad = (nums,num) =>{
  keypadHelper(nums,num,"",0)
  return ans
}

console.log(keypad([2,3,4],3))


// combination sum

const combinationSum = ( num) =>{

}

combinationSum()