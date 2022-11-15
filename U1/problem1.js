/*PROBLEM -- STATEMENT
write a function called sameFrequency.Given two positive integers,
find out if the two numbers have the same frequency of digits */
function sameFrequency(num1,num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    let obj = {};
    for(let i =0 ; i<str1.length;i++){
        let char = str1[i];
        obj[char]= ++obj[char]|| 1;
    }
    console.log(obj);
    for(let i = 0; i<str2.length; i++){
        let word = str2[i];
        if(!obj[word]) return false;
        else obj[word]-=1
    }
    return true
}
// console.log(sameFrequency(182,281));

/*PROBLEM STATEMENT(FREQUENCY COUNTER/ MULTIPLE POINTER)
Implement a function called, areThereDuplicates which accepts a variable
number of arguments, and checks whether there are any duplicates among the arguments passed in
*/
// Aproach 1
function areThereDuplicates(){
    let collection = {};
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]]||0)+1
    }
    console.log(collection)
    for(let key in collection){
        if(collection[key]>1) return true
    }
    return false
}
console.log(areThereDuplicates(1,2,3,1));

// Aproach 2
function areThereDuplicates1(...args){
    // Two pointer
    args.sort((a,b)=>a>b);
    console.log(args);
    let start = 0;
    let next = 1;
    while(next<args.length){
        if(args[start]===args[next]) return true;
        console.log(start,next)
        start++
        next++
    }
    return false
}
console.log(areThereDuplicates1(1,2,2,1));

// Aproach 3
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }

  /* PROBLEM - STATEMENT (Multiple Pointers - averagePair)
  Write a function called averagePair.Given a sorted array of integers and a target average,
  determine if there is apair of values in the array where the average of the pair
  equal the target average
  */
 function averagePair(arr,target){
    let result = [];
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let average = (arr[left]+arr[right])/2;
        if(average===target){
            result.push(arr[left],arr[right])
            left++
            right--
        }else if(average>target){
            right--
        }else{
            left++
        }
    }
    return result
 }
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))

/* PROBLEM -- STATEMENT(MULTIPLE POINTER - ISSUBSEQUENCE)
Write a function called isSubsequence which takes in two strings and checks
whether the character in the first string form a subsequence of the characters in the 
second string.In the order words , the function should check wether the characters in the first string 
appear in the second string,without their order changing
*/
// Aproach 1
function isSubsequence(str1,str2){
    let i=0;
    for(let j=0;j<str2.length;j++){
        if(str1[i]===str2[j]){
            i++
            if(i===str1.length) return true
        }
    }
    return false;
    
}
console.log(isSubsequence('acb',"abc"));
// Aproach 2 udemy solution
// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}


/*PROBLEM-- STATEMENT
Write a function called maxSubarraySum which accept an array of integers and a number called n . the function 
should calculate the maximum sum of n consecutive elements in the array
*/
function maxSubarraySum(arr,num){
    if (arr.length < num) return null;
    let maxSum = 0;
    let tempSum =0 ;
    for(let i=0;i<num;i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i=num;i<arr.length;i++){
        tempSum = tempSum+arr[i]-arr[i-num];
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum;
}
console.log(maxSubarraySum([100,200,300,400],2))

/* PROBLEM STATEMENT (SLIDING WINDOW)
Write a function called minSubArrayLen which accepts two parameters- an array of
positive integers and a positive integer.
The function should return the minimal length of a contiguous subarray of which the sum is
greater than or equal to the integer passed to the function . if there isn,t one return 0 
*/
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
  console.log(minSubArrayLen([2,3,1,2,4,3],7))

/* PROBLEM STATEMENT(FIND LONGEST SUBSTRING)
Write a function called findLongestSubstring , which accepts a string and returns the length of the longest 
substring with all distinct characters
*/
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
  console.log(findLongestSubstring("longestsubstring"));
  
