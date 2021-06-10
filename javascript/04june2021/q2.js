//Write JavaScript program to retrieve first and last element from an array
//regular function
let arr1=["king","queen","Royal","Hello","bye"]
 function firstlastname(arr1){
    returnAr = []
    returnAr.push(arr1.shift(), arr1.pop())
    return returnAr
}
result=firstlastname(arr1)
console.log(result)



//anonymous finction
let v1=function(arr1){
    returnAr = []
    returnAr.push(arr1.shift(), arr1.pop())
    return returnAr
}
result=v1(arr1)
console.log(result)

//arrow function
let v1=(arr1)=>{
        returnAr = []
        returnAr.push(arr1.shift(), arr1.pop())
        return returnAr
}
result=v1(arr1)
console.log(result)

/**
 * IIFEs - Immediately Invoked Function Expression
* single instance of an object
* saves you from polluting the local/global namespace.
* to declare IIFEs we use "grouping operator" ie ()
*/
let arr12=["king","queen","Royal","Hello","bye"]
console.log((function(arr12){
    returnAr = []
    returnAr.push(arr12.shift(), arr12.pop())
    return returnAr
})(arr12))
    

