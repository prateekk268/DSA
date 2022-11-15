// function filterOddNumbers(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

 
//  let Numbers = [1, 2, 3, 4, 5]
//  Numbers.push(6);
//  let evenNumbers = Numbers.filter(n => n%2===0);


// console.log(evenNumbers);

function element(arr,A,B){
    let obj = {};
    for(let key of arr){
        obj[key] = true;
    }
    let a = A;
    while(a<=B){
        if(!obj[a]) return false;
        a++
    }
    return true;
}
console.log(element([1,4,5,2,7,8,3],2,5));

function equilibrium(arr){
    if(arr.length === 1) return arr[0]
    let left = 0;
    let right = arr.length-1;
    let leftSum = 0;
    let rightSum = 0
    while(left<right){
        leftSum += arr[left];
        rightSum += arr[right];
        if(leftSum > rightSum) right--;
        else if (rightSum > leftSum) left++;
        else return ++left;
    }
    return -1
}
console.log(equilibrium([1,3,5,2,2]))
