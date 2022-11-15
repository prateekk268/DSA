/* Selection Sort --- Similar to bubbleSort, but instead of first placing large values into sorted position, it places small
values into sorted position */
// Non ES2015 Syntax
function selectionSort(arr){
    for(let i = 0; i<arr.length;i++){
        let lowest  = i;
        for(let j = i+1; j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest = j;
            }
        }
        if(i!==lowest){
            // Swap
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest]= temp

        }
    }
    return arr
}
console.log(selectionSort1([3,8,5,9,34,12,23]))

// ES2015 VERSION
function selectionSort1(arr){
    const swap = (arr,index1,index2)=>{
        [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
    }
    for(let i=0;i<arr.length;i++){
        let lowest  = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest = j;
            }
        }
        if(i!==lowest) swap(arr,i,lowest);
    }
     return arr
}

/* Insertion Sort --- Builds up the sort by gradually creating a larger left half which is always sorted larger which is
always sorted */
function insertionSort(arr){
    for(var i =1;i<arr.length;i++){
        var currentVal = arr[i];
        for(var j = i-1; j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=currentVal;
    }
    return arr;
}
console.log(insertionSort([2,6,4,9,1,3,54,23]))