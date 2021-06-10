//Write a JavaScript program to clone an array

//regular function
function clone(arr){
    //arr1=[1,2,3,4,5]
    copyarr=arr 
    return copyarr  
}
arr1=[1,2,3,4]
console.log(clone(arr1))
//anonnymous function
let v=function (arr1){
    //arr1=[1,2,3,4,5]
    copyarr=arr1 
    return copyarr  
}
arr1=[1,2,3,4]
console.log(v(arr1))
//arrow function
let v1=(arr1)=>{
    //arr1=[1,2,3,4,5]
    copyarr=arr1 
    return copyarr  
}
console.log(v1(arr1))
//
console.log((function(arr1){
     copyarr=arr1
     return copyarr
})(arr1))
