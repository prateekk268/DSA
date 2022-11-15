/* A process (a function in our case) that calls itself 
The call stack = a function is invoked it is placed (pushed) on the top of the call stack. When JavaScript see the return 
keyword or when the function ends , the compiler will remove (pop)*/
// PROGRAM 1
function takeShower() {
    return "Showering!!";
}
function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`
}
function cookFood() {
    let items = ["Oatmeal", "Eggs", "ProteinShake"];
    return items[Math.floor(Math.random() * items.length)]
}
function wakeUp() {
    console.log(takeShower())
    console.log(eatBreakfast())
    console.log("Ok ready to go to work!")
}

console.log(wakeUp());
/* Two essential parts of a recursive function 1> Base case 2> Different Input*/
// Recursive Version
function countDown(num) {
    if (num <= 0) {
        console.log("All done!!!");
        return
    }
    console.log(num);
    num--;
    countDown(num)
}
console.log(countDown(8));
// Iterative Version
function countDown1(nums) {
    for (let i = nums; i >= 0; i--) {
        console.log(i);
    }
    console.log("All Done!!!")
}
console.log(countDown1(5));
// Recursive Sum of Natural Number
function sum(n) {
    if (n === 1) return 1;
    return n + sum(n - 1);
}
console.log(sum(9));
// Factorial Number
// Iterative
function factorial(fac) {
    let total = 1;
    for (let i = fac; i > 0; i--) {
        total *= i;
    }
    return total
}
console.log(factorial(5));
// Recursion Version 
function factorial1(number) {
    if (number === 1) return 1;
    return number * factorial1(number - 1)
}
console.log(factorial1(6));
// Using Recursion Collect the Odd values. It is called Helper Method Recursion
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
// Using Pure Recursive
function collectOddValues1(arr){
    let newArr = [];
    if(arr.length===0) return newArr;
    if(arr[0]%2!==0) newArr.push(arr[0]);
    newArr = newArr.concat(collectOddValues1(arr.slice(1)));
    return newArr
}
console.log(collectOddValues1([1,2,3,4,5,6,7,8,9]));

// POWER solution 
function power (base,exp){
    if(exp===0) return 1;
    return base*power(base,exp-1);
}
console.log(power(2,4));

// Prouct of array solution
function productOfArray(arr){
    if(arr.length===0) return 1
    return arr[0]*productOfArray(arr.slice(1))
}
console.log(productOfArray([2,4,5,4,2]));

// fib Write a recursive function called which accept a number and returns the nth number in the fibonacci sequence
function fib(nums){
    if(nums<=2) return 1
    return fib(nums-1)+fib(nums-2)
}
console.log(fib(10))

// Reverse -- Write a recursive function called reverse which accepts a string and returns a new string in reverse
function reverse(str){
    if(str.length===0) return str;
    return reverse(str.slice(1))+str[0]
}
console.log(reverse("hiThere"))

// isPalindrome -- Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same forward and backward). Otherwise it returns false
function isPalindrome(str){
    if(str.length<=1) return true;
    if(str[0]===str.slice(-1)){
        console.log(str.slice(-1));
        return isPalindrome(str.slice(1,-1));
        console.log(isPalindrome(str.slice(1,-1)))
    } else return false
}
console.log(isPalindrome("refer"));

/* someRecursive --- Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback
*/
function someRecursive(array,callback){
    if(array.length===0) return false;
    if(callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

/* flatten --- Write a recurisve function called flatten which accepts an arrays and returns a new 
arrays and returns a new array with all values flattened */
function flatten(arr){
    let newArr =[];
    for(let i = 0; i<arr.length;i++){
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(flatten([1,2,[3,[45,575,[8]],12],6]))

/* capitalizeFirst --- Write a recursive function called capitalizeFirst. Given an array of strings, 
capitalize the first letter of each string in the array
*/
// Method 1
function capitalizeFirst(arr,index){
    if(index<arr.length){
        arr[index] = arr[index][0].toUpperCase()+arr[index].slice(1)
        capitalizeFirst(arr,index+1)
    }
    return arr
}
console.log(capitalizeFirst1(["cat","dog","snake","mouse"],0))

// Method 2
function capitalizeFirst1(arr){
    let result = [];
    if(arr.length===0) return result;
    let s = arr[0][0].toUpperCase()+ arr[0].slice(1)
    result.push(s)
    return result.concat(capitalizeFirst1(arr.slice(1)))
}

/* nestedEvenSum
Write a recursive function called nestedEvenSum.
 Return the sum of all even numbers in an object which may contain nested objects.
 */
function nestedEvenSum (obj){
    let sum  = 0
    for(let key in obj){
        if(typeof obj[key] === "object"){
            sum += nestedEvenSum(obj[key])
        } else if (typeof obj[key] === "number" && obj[key]%2===0){
            sum += obj[key]
        }
    }
    return sum;
}

/* stringifyNumber 
Write a function called stringifyNumber which takes in an object and finds all of the 
values which are numbers and converts them to strings. Recursion would be a great way to solve this
*/
// stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

/* collectStrings
Write a function collectStrings which accepts an object and returns an array of all the values in the object that
have a typeof string
*/
// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
// collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}