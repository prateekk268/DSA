/* MultiplePointer -- creating pointers or values that corresponding to an index or position and more towards the 
beginning,end or middle based on a certain condition
PROBLEM - STATEMENT
Write a function called sumZero which accept a sorted array of integers.The function should find the first pair
where the sum is 0.Return an array that includes both values that sum to zero or undefined if a pair dosn,t exist
*/
// A Navie Solution
function sumZero(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) result.push(arr[i], arr[j])
        }
    }
    return result
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3]))
// A Better Solution 
function sumZero1(arr) {
    let final =[];
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
           final.push(arr[left], arr[right]);
            left++;
            right--;
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
    return final;
}
console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 3]))

/* PROBLEM STATEMENT
Count UniqueValues
Implement a function called countUniqueValue which accept a sorted array, and count the unique value in the array.
There can be negative numbers in the array but it will always be sorted
*/
function countUniqueValue(arr){
    if(arr.length===0) return 0;
    let i = 0;
    for(let j = 1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j]
        }
    }
    return i+1;
}
console.log(countUniqueValue([1,2,2,5,7,7,17]));
