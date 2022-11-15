/* Linear Search Algorithms - Given an array, the simplest way to search for an value is to look 
at every element in the array and check if it,s the value we want BIG-O =O(n)  */
// Aproach 1
function linearSeaching(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== val) return i
    }
    return -1
}
console.log(linearSeaching([2,4,1,8,9,34,87],9));

/* Binary Search Algorithms - Binary Search is a much faster form of search. Rather than eliminate half of the remaining
elements at a element at a time  BIG -O == O(N)*/
// Original Solution
function binarySeaching(arr,val){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end)/2);
    while(arr[middle]!==val && start<=end){
    if(arr[middle]>val) end = middle -1;
    else start = middle+1;
    middle = Math.floor((start+end)/2);
    }
    if(arr[middle]===val) return middle;
    else return -1
}
console.log(binarySeaching([1,3,5,7,45,67,76,88,89,93,95,103,135,349],95))

// Refactored Version
function binarySearch(arr,elem){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start+end)/2);
    while(arr[middle]!==elem && start<=end){
        if(arr[middle]>elem) end = middle -1;
        else start = middle+1;
        middle = Math.floor((start+end)/2);
    }
    return arr[middle]=== elem? middle : -1;
}

/* Naive String Search
Suppose we want to count the number of times a smaller string appears in a longer string.
A straight forward approach involves checking pairs of character individually*/
function naiveSearch(long,short){
    let count = 0;
    for(let i= 0; i<long.length;i++){
        for(let j =0; j<short.length;j++){
            if(short[j]!==long[i+j]) break;
            if(j===short.length-1) count++
        }
    }
    return count
}
console.log(naiveSearch("lolie loled","lol"))