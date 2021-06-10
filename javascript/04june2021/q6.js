//Write a JavaScript program to compute the sum and product of an array elements
//q6 Regular function
let x =[10,3,1,2]
product = 1 
sum=0
function sumprod(x){
    for(i=0 ; i<x.length ; i++){
        product = product*x[i]
        sum = sum+x[i]
    }
    return(`sum : ${sum} , product : ${product}`)
}
console.log(sumprod(x))
//anonymous function
let vi=function(x){
    for(i=0 ; i<x.length ; i++){
        product = product*x[i]
        sum = sum+x[i]
    return(`sum : ${sum} , product : ${product}`)
    }
}
console.log(vi(x))
//arrow function
let v1=(x)=>{
    for(i=0 ; i<x.length ; i++){
        product = product*x[i]
        sum = sum+x[i]
    }
    return(`sum : ${sum} , product : ${product}`)
}
console.log(v1(x))
/**
 * IIFEs - Immediately Invoked Function Expression
* single instance of an object
* saves you from polluting the local/global namespace.
* to declare IIFEs we use "grouping operator" ie ()
*/
console.log((function(x){
    for(i=0 ; i<x.length ; i++){
        product = product*x[i]
        sum = sum+x[i]
    }
    return(`sum : ${sum} , product : ${product}`)
})(x))