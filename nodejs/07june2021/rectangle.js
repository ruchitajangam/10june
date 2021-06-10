// let rectangle={
//     area:(x,y)=>x*y,
//     perimeter:(x,y)=>(2*x)+(2*y)
// }
// function solverect1(x,y){
//     console.log(`Solving rectangle to find area and perimeter for length and breadth = ${x},${y}`)
//     if(x==0 | y==0)
//         console.log("Can not accept zero for processing..")
//     else{
//         console.log(`Area of rectangle is ${rectangle.area(x,y)}`)
//         console.log(`perimeter of rectangle is ${rectangle.perimeter(x,y)}`)

//     }
        
// }
// // solverect1(3,4)
// // solverect1(0,8)
// // solverect1(0,0)
// exports.area=(x,y)=>x*y,
// exports.perimeter=(x,y)=>(2*x)+(2*y)
// circle=require("./circle")
// rect=require("./rectangle")
// function solverect(x,y){
//     rect(x,y,(err,rect)=>{
//         if(err)
//             console.log(`Error:${err.message}`)
//         else
//         {
//             console.log(`Area of rectangle is ${rect.area()}`)
//         }
            
//     })
// }
// solverect(5,0)


/**
 * find area and perimeter of rectangle, using 
 * 1) callback
 * 2) Error object
 * 
 * Error First Callback: Callback that captures error as the first parameter.
 * 
 * Single Responsibility
 */

 module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0)
    {
        errMsg = "Can not process rectangle as it has either of the side as 0 or negative"
        setTimeout(() =>
            callback(new Error(errMsg), null)
            , 2000)
    }
    else {
        setTimeout(() =>
            callback(null,
                {
                    perimeter: () => (2 * (x + y)),
                    area: () => (x*y)
                }
        ), 2000)}
}