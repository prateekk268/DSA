// Product Sum = It consits of numbers and other Arrays
function productSum(list, depth){
    let sum = 0;
    list.forEach(element => {
        if(Array.isArray(element)){
            sum += productSum(element,depth+1);
        } else {
            sum += element;
        }
    });
    return sum*depth;
}
console.log(productSum([1,2,[3,2],6,[[2,4],1],7],1));