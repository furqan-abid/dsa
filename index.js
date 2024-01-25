// this is firctorial recursion
const fictorial = (n) =>{

  if(n===1){
    return 1
  }
  let temp = fictorial(n-1)*n

  return temp
}

console.log(fictorial(5));

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

console.log(exponential(4))