// // this is firctorial recursion
// const fictorial = (n) =>{

//   if(n===1){
//     return 1
//   }
//   let temp = fictorial(n-1)*n

//   return temp
// }

// console.log("this is fictorial",fictorial(5));

// // finding exponential value recursion

// const exponential = (n) =>{
//   let temp;
//   if(n===0){
//     temp = 1
//     return temp;
//   }
//   temp = 2 * exponential(n-1)

//   console.log(temp);
//   return temp
// }

// console.log("this is exponential",exponential(4))

// // fibonaci series

// const fibonacci = (n) =>{
//   console.log(n)
//   if(n===0){
//     return 0;
//   }
//   if(n===1){
//     return 1
//   }

//   let first = fibonacci(n-1)
//   let second = fibonacci(n-2)

//   return first + second;
// }

// console.log("this is fibonacci",fibonacci(5))

// // palindrom

// const palindromeHelper = (string,start,end) =>{
//   if(start >= end){
//     return true
//   }
//   if(string[start] !== string[end]){
//     return false
//   }
//   return palindromeHelper(string, start+1 , end -1 )
// }

// const palindrome = (string) =>{
//   let start = 0
//   let end = string.length - 1
//   return palindromeHelper(string,start,end)

// }
// console.log(palindrome("furqan"))

// // reverse and array

// const reverseArrayHelper = (arr,start,end)=>{

//   if(start >= end){
//     return arr
//   }
//   let temp = arr[start];
//   arr[start] = arr[end]
//   arr[end] = temp

//   return reverseArrayHelper(arr,start+1,end-1)
// }

// const reverseArray = (arr) =>{
//   let start = 0
//   let end = arr.length-1
//   return reverseArrayHelper(arr,start,end)
// }

// console.log(reverseArray([2,3,1,4,5,3]));

// // subsequences

// const subsequencesHelper = (string,newString,index)=>{
//   if(string.length == index){
//     console.log(newString)
//     return
//   }

//   // take
//   subsequencesHelper(string,newString+string[index],index+1)

//   // no take
//   subsequencesHelper(string,newString,index+1)
// }

// const subsequences = (string) =>{

//   subsequencesHelper(string,"",0)
// }

// console.log("subsequence",subsequences("abc"))

// // sub sets of array
// let mainArr = []
// const subSetHelper = (arr,newArr,index) =>{

//   if(arr.length == index){
//     mainArr.push(newArr.slice())
//     return
//   }
//   newArr.push(arr[index])
//   subSetHelper(arr,newArr,index+1)

//   newArr.pop()
//   subSetHelper(arr,newArr,index+1)
//   return
// }

// const subSets = (arr) =>{

//   return subSetHelper(arr,[],0)
// }

// subSets([1,2,3,4])

// console.log(mainArr);

// // finding the sum in subset of array

// const sumFinderHelper = (arr,sum,tempSum,index) =>{
// console.log(arr,sum,tempSum,index)
//   if(index==arr.length){
//     return false
//   }
//   if(sum==tempSum){
//     return true
//   }

//   // take
//   let call1 = sumFinderHelper(arr,sum,tempSum+arr[index],index+1)

//   // no take

//   let call2 = sumFinderHelper(arr,sum,tempSum,index+1)

//   return call1 || call2
// }
// const sumFinder = (sum,arr) =>{
// console.log(sum,arr);

// return sumFinderHelper(arr,sum,0,0)
// }

// let sum = 9
// let arr = [1,2,3,3,1,5]

// console.log(sumFinder(sum,arr))

// // permutations

// const swap = (nums,i,j) => {
//   let temp = nums[i];
//   nums[i]=nums[j];
//   nums[j]=temp;
// }
// const permutationsHelper = (nums,i) =>{
//   if(nums.length==i){
//     console.log("break")
//     return
//   }

//   for(let j=i;j<nums.length;j++){
//     swap(nums,i,j)
//     console.log("before",i,j,nums)
//     permutationsHelper(nums,i+1)
//     swap(nums,j,i);
//     console.log("after",i,j,nums)
//   }
// }
// const permutations = (nums) =>{
// permutationsHelper(nums,0)
// }
// permutations([1,2,3])

// // keypad

// let keys = ["","",'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
// let ans = []

// const keypadHelper = (nums,n,temp,i)=>{
//   if(n===i){
//     ans.push(temp)
//     return
//   }

//   for(let j=0;j<nums.length;j++){
//     keypadHelper(nums,n,temp + keys[nums[i]][j],i+1)
//   }
// }
// const keypad = (nums,num) =>{
//   keypadHelper(nums,num,"",0)
//   return ans
// }

// console.log(keypad([2,3,4],3))

// // combination sum
// const combinationAns = []
// const combinationSumHelper = (arr,target,temp,currentSum,i)=>{

//   if(currentSum>target){
//     return
//   }
//   if(arr.length==i){
//     if(currentSum==target){
//       combinationAns.push([...temp]);
//     }
//     return
//   }

//   // take
//   currentSum+=arr[i]
//   temp.push(arr[i])
//   combinationSumHelper(arr,target,temp,currentSum,i)
//   currentSum-=arr[i]
//   temp.pop()

//   // no take just incrementing
//   combinationSumHelper(arr,target,temp,currentSum,i+1)
// }
// const combinationSum = (arr,target) =>{

//   combinationSumHelper(arr,target,[],0,0)
//   return combinationAns
// }

// console.log(combinationSum([2,3,6,7],7))

// upper is commented

// rate in maze problem

let ans = [];

const isSafe = (x, y, maze, n) => {
  console.log(x, y, maze, n);
  console.log(x >= 0 && y >= 0 && x < n && y < n && maze[x][y] === 1);
  return x >= 0 && y >= 0 && x < n && y < n && maze[x][y] === 1;
};
const rateInMazeHelper = (x, y, maze, temp, n) => {
  if (x == n - 1 && y == n - 1) {
    ans.push(temp);
    console.log("wokring");
    return;
  }
  console.log("object");

  maze[x][y] = 0;

  if (isSafe(x + 1, y, maze, n)) {
    rateInMazeHelper(x + 1, y, maze, temp + "D", n);
  }
  if (isSafe(x, y - 1, maze, n)) {
    rateInMazeHelper(x, y - 1, maze, temp + "L", n);
  }
  if (isSafe(x, y + 1, maze, n)) {
    rateInMazeHelper(x, y + 1, maze, temp + "R", n);
  }
  if (isSafe(x - 1, y, maze, n)) {
    rateInMazeHelper(x - 1, y, maze, temp + "U", n);
  }

  maze[x][y] = 1; // backtracking
};

const rateInMaze = (maze, n) => {
  rateInMazeHelper(0, 0, maze, "", n);

  return ans;
};

let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

let n = maze.length;

// console.log(rateInMaze(maze,n));

// n queen problem

const isQueenSafe = (board, col, row, num) => {
  // check left row
  for (let i = 0; i < row; i++) {
    if (board[col][i]) {
      return false;
    }
  }

  // check left upper diaognal
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[j][i]) return false;
  }

  // check left lower diaognal
  for (i = row, j = col; j >= 0 && i < num; i++, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  return true;
};

const nqueenHelper = (board, col, num) => {
  if (col >= num) {
    return true;
  }

  for (let i = 0; i < num; i++) {
    if (isQueenSafe(board, i, col)) {
      board[i][col] = 1;
      if (nqueenHelper(board, col + 1, num)) return board;
      board[i][col] = 0;
    }
  }
  return false;
};

const nqueen = (board, num) => {
  return nqueenHelper(board, 0, num);
};

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let num = board.length;

// console.log(nqueen(board,num));

// sudoko problem

const isSukodoSafe = (board,selected,row,col,num)=>{
  console.log(row,col)
  for(let i = 0;i<num;i++){
    if(board[row][i] ===selected){
      return false
    }
  }

  for(let j = 0;j<num;j++){
    if(board[j][col]===selected){
      return false
    }
  }

  let startRow = row - row % 3;
  let startCol = col - col % 3;

  for(let i = startRow;i<startRow+3;i++){
    for(let j = startCol;j<startCol+3;j++){
      if(board[i][j]===selected){
        return false
      }
    }
  }

  return true

}
const sukodoHelper = (board,num,row,col) =>{

  if(row===num){
    return true
  }

  if(col==num){
    return sukodoHelper(board,num,row+1,0)
  }

  if (board[row][col] != 0){
    return sukodoHelper(board, num,row, col + 1);
  }

  for(let i = 1;i<=num;i++){

    if(isSukodoSafe(board,i,row,col,num)){
      board[row][col]=i
      if(sukodoHelper(board,num,row,col+1)){
        return board
      }
      board[row][col]=0
    }
  }
  return false
}

const sukodo = (board,num) => {

  return sukodoHelper(board,num,0,0)

};

let sukodoboard = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

let sukodoNum = sukodoboard.length

console.log(sukodo(sukodoboard,sukodoNum))
