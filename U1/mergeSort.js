/* Merge Sort --- It's a combination of three things - spliting, merging & sorting!!!!
BIG-O=O(Nlog(N)) */
// MERGES TWO ALREADY SORTED ARRAYS
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++
    }
    return result
}
console.log(merge([1,3,5,9],[2,4,7,10]))

// MergeSort algorithms
function merging(array1,array2){
    let output = [];
    let i = 0;
    let j = 0;
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            output.push(array1[i]);
            i++
        } else {
            output.push(array2[j]);
            j++
        }
    }
    while(i<array1.length){
        output.push(array1[i]);
            i++
    }
    while(j<array2.length){
        output.push(array2[j]);
            j++
    }
    return output
}

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merging(left,right)
}
console.log(mergeSort([10,7,6,17]))