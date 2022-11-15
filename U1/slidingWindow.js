/* Sliding Window pateern involves creating a window which can be either be an array or number from one to another
Depending on a certain condition , the window either increases or closes(and a new window is created),
very useful in keeping track of a subset of data in an array/strings

PROBLEM-- STATEMENT
Write a function called maxSubarraySum which accept an array of integers and a number called n . the function 
should calculate the maximum sum of n consecutive elements in the array
*/
// A Naive Solution
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp
    }
    return max
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// A Better Solution 
function maxSubarraySum1(arr, num) {
    if (arr.length < num) return null;
    let maxSum = 0;
    let temp = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    temp = maxSum;
    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];
        maxSum = Math.max(temp, maxSum)
    }
    return maxSum;
}
console.log(maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));