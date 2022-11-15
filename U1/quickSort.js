/* Quick Sort --- Like merge Sort, exploits the fact that arrays of 0 or 1 elements are always sorted. Works by 
selecting one element(called the pivot) and find the index where the pivot should end up in the sorted array.
Once the pivot is positioned appropriately,quick sort can be appiled on either side of the pivot */
// First Version
function pivot(arr,start=0){
    function swap(array,i,j){
        let temp = array[i];
        array[i]= array[j];
        array[j]= temp
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start+1; i<arr.length;i++){
        if(pivot>arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

// Version with ES2015 syntax
function pivot1(arr,start=0){
    function swap1(arr1,i,j){
        [arr1[i],arr1[j]] = [arr1[j],arr1[i]]
    }
    let pivot1 = arr[start];
    let swapIdx1 = start;
    for(let i=start+1; i<arr.length;i++){
      if(pivot1>arr[i]){
        swapIdx1++;
        swap1(arr,swapIdx1,i)
      }
    }
    swap1(arr,start,swapIdx1);
    return swapIdx1
}

// QuickSort Algorithms
function pivot(arr,start=0){
    function swap(array,i,j){
        let temp = array[i];
        array[i]= array[j];
        array[j]= temp
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start+1; i<arr.length;i++){
        if(pivot>arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr,left =0 ,right = arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
}
console.log(quickSort([100,3,2,4,6,9,1,12,23,15]))