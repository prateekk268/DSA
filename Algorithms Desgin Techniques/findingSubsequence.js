/* Problem -- Finding Subsequence - To find all possible subsequence for a given sequence(string)
Subsequence == must be in same sequence that they appear in word. */
// Solution
function getSubsequence(word){
    let result = '';
    if(word.length===0){
        return result;
    }
    const first = word.charAt(0);
    const rest = getSubsequence(word.substring(1));
    console.log(rest.split(','));
    rest.split(',').forEach(subseq => {
        result += "," + first + subseq;
        result += "," + subseq;
    })
    return result.substring(1);
}
console.log(getSubsequence('abc'))
// Time Complexity - 2^n;
// O(N) -- Space Complexity
