// object is good at fast insertion,access,removal and when u don,t need order
// array is good at fast access,insertion(depends),removal(depends)

// Progaram 1 -- Write a function which takes in astring and returns counts of each character in the string
// Aproach 1
function charCount(str){
    let obj = {};
    for(let i = 0; i<str.length; i++){
        let char = str[i].toLowerCase()
        if(/[a-z0-9]/.test(char)){
            if(obj[char]>0) obj[char]++
            else obj[char] = 1
        }
    }
    return obj;
}
console.log(charCount("alskd foaaaaatkf eof"))
//Aproach 2
function charCount1(str){
    let obj = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
} 
function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code>47 && code<58) && !(code>64 && code<91) && !(code>96 && code<123)){
        return false;
    }
    return true
}
console.log(charCount1("some thing is better than nothing"))



