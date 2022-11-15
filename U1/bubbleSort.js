// Bubble Sort --- A sorting algorithm where the largest values bubble up to the top! BIG - O === O(N^2), BEST CASE -- O(N)
// Unoptimized version of Bubble Sort
function bubbleSort(arr){
    for(let i = arr.length; i>0; i--){
        for(let j = 0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort1([1,5,21,11,32,15,12]))

// ES2015
function bubble(arr){
    const swap = function(arr,index1,index2){
        [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
    }
    for(let i = arr.length; i>0; i--){
        for(let j =0; j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}

// Optimized BubbleSort with noSwap
function bubbleSort1(arr){
    let noSwap;
    for(let i = arr.length; i>0; i--){
        noSwap = true;
        for(let j =0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
  return arr
}
