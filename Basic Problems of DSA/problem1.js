//Problem 1----- Reverse String
// Solution 1
function reverse(str){
    return str.split('').reverse().join('')
}
// Solution 2
function reverse1(str){
    let rev = '';
    for(let char of str){
        rev = char + rev;
    }
    return rev;
}
// Solution 3
function reverse2(str){
    return str.split('').reduce((rev,char)=>char + rev,"")
}
console.log(reverse('akdkvfrr'));
console.log(reverse1('vdeedvfrr'));
console.log(reverse2('meekkvfrr'));

// Problem 2 ---- Palindrome
// Solution 1
function isPalindrome(str){
    const rev = str.split('').reverse().join('');
    return rev === str;
}
// Solution 2
function palindrome(str){
    return str.split('').every((char,i)=>{
        return char === str[str.length-i-1]
    })
}
console.log(isPalindrome('abba'));
console.log(palindrome('abqbba'));

// Problem 3 ---- Reversing of Integer --- Given an integer, return on integer that is the reverse ordering of number 
// e.g reverseInt(12) === 21, reverseInt(-123) === -321, reverseInt(04) === 4
function reverseInt(n){
    const revint = n.toString().split('').reverse().join('');
    return parseInt(revint)*Math.sign(n);
}
console.log(reverseInt(-23));

// Problem 4 --- Max Char Problems -- Write a function return most commonly used in the string
function maxChar(str){
    let charMap = {};
    let max = 0;
    let maxChar = "";
    for(let char of str){
        if(charMap[char]) charMap[char]++;
        else charMap[char] = 1;
    }
    for(let char in charMap){
        if(charMap[char]>max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxChar("abcccccd"));

// Problem 5 --- fizzBuzz;
function fizzBuzz(n){
    for(let i = 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log('fizzBuzz');
        } else if (i%3===0){
            console.log('fizz');
        } else if (i%5===0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);

// Problem 6 --- Array Chunk Problem --- Given an array & chunk size, divide the array into many subarrays , where 
// each subArray is of length size
// Solution 1
function chunk(array,size){
    const chuncked = [];
    for(let elem of array){
        const last = chuncked[chuncked.length-1];
        if(!last || last.length === size){
            chuncked.push([elem])
        } else {
            last.push(elem)
        }
    }
    return chuncked;
}
// Solution 2
function chunk1(arr,size){
    const chunked = [];
    let index = 0;
    while(index<arr.length){
        chunked.push(arr.slice(index,index+size));
        index +=size;
    }
    return chunked;
}
console.log(chunk([1,2,3,4,5,6],2));
console.log(chunk1([1,2,3,4,5,6,7,9],3));

// Problem 7 --- Anagrams
// Solution 1
function anagrams(str1,str2){
    const aCharMap = buildCharMap(str1);
    const bCharMap = buildCharMap(str2);
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
    for(let key in aCharMap){
        if(aCharMap[key]!==bCharMap[key]) return false;
    }
 return true;
}
function buildCharMap(str){
    const charMap = {};
    for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
        charMap[char] = charMap[char]+1 || 1;
    }
    return charMap;
}
// Solution 2
function anagrams1(st1,st2){
    console.log(cleanString(st1));
    return cleanString(st1) === cleanString(st2);
}
function cleanString(str){
    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}
console.log(anagrams("rail safety", "fairy tales"))
console.log(anagrams1("rail safety", "fairy tales"))

// Problem 8 --- Capitalize
// Solution 1
function capitalize(str){
    const words = [];
    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase()+word.slice(1));
    }
    return words.join(" ");
}
// Solution 2
function capitalize1(str){
    let finalStr = str[0].toUpperCase();
    for(let i = 1; i<str.length; i++){
        if(str[i-1]=== " "){
            finalStr += str[i].toUpperCase();
        } else {
            finalStr += str[i];
        }
    }
    return finalStr;
}
console.log(capitalize("a short sentence"));
console.log(capitalize1("a short sentence"));

// Problem 9 --- Printing Steps --- Write a function that accept a positive number N. the function should console.log 
// a steps shape with N levels, using the # character.Make sure the steps has step has spaces on left hand sides
// Solution 1
function steps(n){
    for(let row = 0; row< n; row++){
        let stair = "";
        for(let column = 0; column<n; column++){
            if(column<=row){
                stair+='#'
            } else {
                stair+=" ";
            }
        }
        console.log(stair);
    }
}
// Solution 2
function step(n,row=0,stair=' '){
    if(n===row) return
    if(n===stair.length){
        console.log(stair);
        return step(n,row+1);
    }
    if(stair.length<=row){
        stair +='#'
    } else {
        stair +=' '
    }
    step(n,row,stair)
}
step(6);
steps(5);

// Problem 10 --- Pyramids Steps --- Write a function thats accepts a positive number N, 
// The function should console log a pyramid shape with N level Make sure the pyramids has spaces on both left and
// right hand sides
// Solution 1
function pyramid(n){
    const midpoint = Math.floor((2*n-1)/2);
    for(let row = 0; row<n; row++){
        let level = '';
        for(let col = 0; col < 2*n-1 ; col++){
            if(midpoint-row<=col && midpoint+row>=col){
                level +="#"
            } else {
                level +=" "
            }
        }
        console.log(level);
    }
}
function pyramids(n,row = 0, level = ''){
    const mid = Math.floor((2*n-1)/2);
    if(n===row) return;
    if(level.length === 2*n-1){
        console.log(level);
        return pyramids(n,row+1)
    }
    let add;
    if(mid-row<=level.length && mid+row>=level.length){
        add = '#'
    } else {
        add = ' '
    }
    pyramids(n,row,level+add);
}
pyramid(4);
pyramids(6)

// Problem 11 --- Find the vowels
// Solution 1
function vowels(str){
    let count = 0;
    const checker = ["a","e","i","o","u"];
    for(let char of str.toLowerCase()){
        if(checker.includes(char)) count++
    }
    return count;
}
// Solution 2
function vowels1(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}
console.log(vowels("Hi there"));
console.log(vowels1("How are you"));