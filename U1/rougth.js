/*i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
[6,1,3,2,4,5,7]
[1,6,3,2,4,5,7]

*/
function swapCount (arr){
    let counter = 0
 for(let i =0 ; i<arr.length; i++){
    if(arr[i]===i+1) continue
    let temp = arr[i]-1;
    [arr[i],arr[temp]] = [arr[temp], arr[i]]
    counter++
 }
 return counter
}
console.log(swapCount([7, 1, 3, 2, 4, 5, 6] ))
