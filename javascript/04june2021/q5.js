//Write a JavaScript program to sort the items of an array
//regular function
let arr1 = [1,8,5,4,7]
function sorting(arr1){
    return arr1.sort()
}
console.log(sorting(arr1))
//anonyomus function
let vi=function(arr1){
    return arr1.sort()
}
console.log(vi(arr1))
//arrow function
let vi1=(arr1)=>{
    return arr1.sort()
}
console.log(vi1(arr1))
/**
 * IIFEs - Immediately Invoked Function Expression
* single instance of an object
* saves you from polluting the local/global namespace.
* to declare IIFEs we use "grouping operator" ie ()
*/
console.log((function(arr1){
    return arr1.sort()
})(arr1))