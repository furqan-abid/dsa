// find max and min

const maxAndMin = (arr) =>{
let max = 0
let min = 100000000000

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] < max){
        min = arr[i]
    }
}

return {max,min}
}

// console.log(maxAndMin([1,2,4,3,2]));

// reverse and array

const reverseArray = (arr) =>{
    for(i=0,j=arr.length-1;i<arr.length/2;i++,j--){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr

}

let array=[1,2,3,4,5]

console.log("Reversed Array is:",reverseArray(array))