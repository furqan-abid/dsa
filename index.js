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