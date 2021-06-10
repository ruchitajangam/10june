// //rect=require("./rectangle")
// let circle={
//     area:(r)=>3.14*r*r,
//     perimeter:(r)=>2*3.14*r
// }
// function solvecircle(x){
//     console.log(`Solving circle to find area and perimeter for radius = ${x}..`)
//     if(x==0)
//         console.log("Can not accept zero for processing..")
//     else{
//         console.log(`Area of circle is ${circle.area(x)}`)
//         console.log(`perimeter of circle is ${circle.perimeter(x)}`)
//         //console.log(`perimeter of circle is ${rect.perimeter(x)}`)
//     }
        
// }
// // solvecircle(55)
// // solvecircle(55.67)
// // solvecircle(0)
// //circle=require("./circle")
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


exports.area = (r) => 3.14 * r * r,
exports.perimeter = (r) => 2 * 3.14 * r
