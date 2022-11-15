/* frequency count uses object or sets to collect freq/values 
Program 2 -- write a function called "same" , which accepts two arrays . the function should return true if 
 every value in the array has its every value in the array has its corresponding value squared in the second array
" The frequency of value must be the same"
*/
// 1> A Naive Solution 
function same (arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(let i =0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex,1)
    }
    return true;
}
// console.log(same([1,2,3],[4,1,9]));
// Better Solution 
function same1 (arr1, arr2){
    let obj1 = {};
    let obj2 = {};
    if(arr1.length !== arr2.length) return false;
    for(let i of arr1){
      obj1[i]= (obj1[i] || 0)+1;
    }
    for(let i of arr2){
        obj2[i]= (obj2[i] || 0)+1;
      }
    for(let key in obj1){
        if(!(key**2 in obj2)) return false;
        if(obj2[key**2]!== obj1[key]) return false
        }
        return true;
}
// console.log(same1([1,2,3],[4,1,9,16]));
// Better in space complexity
function same2 (a, b){
    let o={};
    for(let val of a){
        o[val] = ++o[val] || 1;
    }
    console.log(o)
    for(let i =0; i<b.length; i++){
        let val = b[i];
        console.log(val)
        if(!o[Math.sqrt(val)]) return false;
        else o[Math.sqrt(val)] -=1;
    }
    return true;
}
// console.log(same2([1,2,3,3],[4,1,9,9]));

// PROBLEM == ANAGRAMS 
/* Give two strings , write a function to determine if the second string is an anagram of the first . 
An angrams is a word, phrase , or name formed by rearranging the letters of another, such as cinema, formed
from iceman
*/
function isAnagrams(str1,str2){
    if(str1.length!==str2.length) return false;
    let container = {};
    for(let i = 0; i<str1.length; i++){
    let char = str1[i];
     container[char]=++container[char] || 1;
    }
     for(let j = 0; j<str2.length; j++){
        let letter = str2[j];
        if(!container[letter]) return false;
        else container[letter]-=1;
     }
  
    return true;
}
console.log(isAnagrams("anagram", "nagaram"))