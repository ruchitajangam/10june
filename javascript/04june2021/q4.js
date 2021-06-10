//Write a JavaScript program which accept a number as input and insert dashes (-) between each element
 // //regular function
var a1=1*prompt("Enter the number:")
var a=a1.toString()
var b=[a[0]]
function dashfunction(a){
    for (let i=1;i<a.length;i++){

        if((a[i-1]%2 ===0)&&(a[i]%2 ===0)){
            b.push(a[i],'-')
        }
        else{
            b.push(a[i])
        }
    }
   return b.join('-')

}
console.log(dashfunction(a))

// //anonymous function
let v1=function(a){
    for (let i=1;i<a.length;i++){

        if((a[i-1]%2 ===0)&&(a[i]%2 ===0)){
            b.push(a[i],'-')
        }
        else{
            b.push(a[i])
        }
    }
   return b.join('-')

}
console.log(v1(a))
// //arrow function
let vi1=(a)=>{
    for (let i=1;i<a.length;i++){

        if((a[i-1]%2 ===0)&&(a[i]%2 ===0)){
            b.push(a[i],'-')
        }
        else{
            b.push(a[i])
        }
    }
   return b.join('-')

}
 console.log(vi1(a))
/**
 * IIFEs - Immediately Invoked Function Expression
* single instance of an object
* saves you from polluting the local/global namespace.
* to declare IIFEs we use "grouping operator" ie ()
*/
console.log((function(a){
    for (let i=1;i<a.length;i++){

        if((a[i-1]%2 ===0)&&(a[i]%2 ===0)){
            b.push(a[i],'-')
        }
        else{
            b.push(a[i])
        }
    }
   return b.join('-')
})(a))
