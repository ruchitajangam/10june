//write javascript function to join all element
//regular function
 let arr1=[1,2,3,4,5,6]
function newfunct(arr1){
    return arr1.join('')
}
console.log(newfunct(arr1))

//anonymous function
let v1=function(arr1){
        return arr1.join('')
    }
console.log(v1(arr1)) 

//arrow function
let v1=(arr1)=>{
    return arr1.join('')
}
console.log(v1(arr1)) 
/**
 * IIFEs - Immediately Invoked Function Expression
* single instance of an object
* saves you from polluting the local/global namespace.
* to declare IIFEs we use "grouping operator" ie ()
*/
console.log((function(arr1){
    return arr1.join('')
})(arr1))

