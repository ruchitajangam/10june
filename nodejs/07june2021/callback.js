// //find area and perimeter of rectangle ,using
// //1)callback
// //2)Error object
// //Error First Callback that has the captures the error as the first parameter
// //single Responsibillity
// rect=require("./circle")
// module.exports=(x,y,callback)=>{
//     if(x<=0 || y<=0)
//     {
//         errMsg="Can not process rectangle as it has either of the side as 0 or negative"
//         setTimeout(()=>
//         callback(new Error(errMsg),null),
//         2000)
//     }
//     else{
//         setTimeout(()=>
//         callback(null,{
//             primeter:()=>(2*(x+y)),
//             area:()=>(x*y)

//         }
//         ),2000)
//     }
// }




var circle=require("./circle")
let rect = require("./rectangle")

function solveRect(x, y) {
    rect(x, y, (err, rect) => {
        if (err)
            console.log(`ERROR: ${err.message}`)
        else {
            console.log(`Area of rectangle is ${rect.area()}`)
            console.log(`Perimeter of rectangle is ${rect.perimeter()}`)
        }        
    })
}

solveRect(2,8)


