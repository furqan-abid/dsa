// find max and min

const maxAndMin = (arr) => {
  let max = 0;
  let min = 100000000000;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
      min = arr[i];
    }
  }

  return { max, min };
};

// console.log(maxAndMin([1,2,4,3,2]));

// reverse and array

const reverseArray = (arr) => {
  for (i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

let array = [1, 2, 3, 4, 5];

console.log("Reversed Array is:", reverseArray(array));

// find element in array

const findElement = (arr, j) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == j) {
      return { num: j, success: true, index: i };
    }
  }

  return false;
};

let findArr = [2, 1, 2, 4, 33, 1];

console.log(findElement(findArr, 32));

// find a unique element in array

const uniqueElement = (arr) => {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    // using XOR operator it return false if two elements are same and true if elements are different
    ans = arr[i] ^ ans;
  }
  return ans;
};

console.log(uniqueElement([1, 1, 2, 3, 3]));

// rotate an array

const reverse = (arr, start, end) => {
  for (let i = start, j = end - 1; i < end / 2; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};
const rotateArray = (arr, num) => {
  reverse(arr, 0, arr.length);
  reverse(arr, num, arr.length);
  reverse(arr, 0, num);
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// all pair whose sum is X

let sumPairs = [];
const sumPair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] === num) {
      sumPairs.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (arr[start] + arr[end] < num) {
      start++;
    } else {
      end--;
    }
  }

  return sumPairs;
};

console.log(sumPair([1, 2, 3, 4, 5, 6, 7], 8));

// majority element in an array

const majorityElement = (arr) => {
  let element = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      element = arr[i];
    }
    if (arr[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      count++;
    }
  }

  if (count > Math.floor(arr.length / 2)) {
    return { element, count, array: arr.length };
  } else {
    return false;
  }
};

console.log(majorityElement([1, 1, 1, 1, 1, 2, 3, 1, 2, 3]));

// sort 0,1,2 array using dutch sort algorithm

let sortSwap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const sort012 = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      sortSwap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      sortSwap(arr, mid, high);
      high--;
    }
  }

  return arr;
};

console.log(sort012([1, 2, 1, 1, 0, 0, 2, 1]));

// duplicates in array

let duplicatesAns = [];

const duplicatesInArray = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let index = arr[i] % n;
    console.log(index);
    arr[index] += n;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] / n >= 2) {
      duplicatesAns.push(i);
    }
  }
  return duplicatesAns;
};

console.log("duplicates", duplicatesInArray([1, 1, 2, 3, 4, 1]));

// make zeros in 2d array

const makeZeros = (arr) => {
  let n = arr.length;
  let m = arr[0].length
  let temp = structuredClone(arr)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) {
        if (i + 1 < n) {
          arr[i][j] += temp[i + 1][j];
          arr[i + 1][j] = 0;
        }
        if (i - 1 >= 0) {
          arr[i][j] += temp[i - 1][j];
          arr[i - 1][j] = 0;
        }
        if (j + 1 < m) {
          arr[i][j] += temp[i][j + 1];
          arr[i][j + 1] = 0;
        }
        if (j - 1 >= 0) {
          arr[i][j] += temp[i][j - 1];
          arr[i][j - 1] = 0;
        }
      }
    }
  }
  return arr;
};

const makeZerosArr = [
  [1, 2, 3, 4],
  [5, 6, 0, 7],
  [8, 9, 4, 6],
  [8, 4, 5, 2],
];
console.log(makeZeros(makeZerosArr));


// transpose of a matrix

const transposeSwap = (arr,i,j) =>{
  const temp = arr[i][j]
  arr[i][j] = arr[j][i]
  arr[j][i] = temp
}
const transpose = (arr) =>{

  for(let i = 0;i<arr.length;i++){
    for(let j = 0 ; j<i;j++){
        transposeSwap(arr,i,j)
    }
  }
  return arr
}

const makeTransposedArr= [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(transpose(makeTransposedArr));

// rotate matrix 90 degree

const RotateSwap = (arr,i,j) =>{
  const temp = arr[i][j]
  arr[i][j] = arr[j][i]
  arr[j][i] = temp
}
const Rotate = (arr) =>{

  let n = arr.length
  for(let i = 0;i<n;i++){
    for(let j = 0 ; j<i;j++){
        RotateSwap(arr,i,j)
    }
  }

  for(let i = 0;i< n/2;i++){
    for(let j = 0;j<n;j++){
      const temp = arr[i][j];
      arr[i][j] = arr[n-1-i][j];
      arr[n-1-i][j] = temp;
    }
  }
  return arr
}

const makeRotatedArr= [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(Rotate(makeRotatedArr));

// traversing a matrix

const traverseAns = []
const traverseMatrix = (arr) =>{

  let top = 0;
  let left = 0;
  let right = arr[0].length - 1;
  let bottom = arr.length - 1;

  while(top<=bottom && left <=right){
    for(let i = left;i<=right;i++){
      traverseAns.push(arr[top][i])
    }
    top++
    for(let i = top;i<=bottom;i++){
      traverseAns.push(arr[i][right])
    }
    right--
    if(top<=bottom){
      for(let i = right;i>=left;i--){
        traverseAns.push(arr[bottom][i])
      }
      bottom--
    }
    if(left<=right){
      for(let i = bottom;i>=top;i--){
        traverseAns.push(arr[i][left])
      }
      left++
    }
  }
  return traverseAns
}

const traverseArr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

console.log(traverseMatrix(traverseArr));