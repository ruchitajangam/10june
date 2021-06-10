//q7 Collect student information as name, percentage for 5 different students and display the name and percentage of the student with highest percentage. 
//Regular function
let name_std = []
let precentage = []
function maxper(){
for (i=0 ; i<5 ; i++)
{
    name_std.push(prompt('enter student name ' + i))
    precentage.push(prompt('enter student percentage ' +i))
}
for (i=0; i<=precentage.length-1 ;i++)
{
    if(precentage[i] == Math.max(...precentage))
    {
        console.log('name = ' + name_std[i] + ' percentage = '+precentage[i])
    }
}
}
console.log(maxper())
//anonymous function
let vi=function(){
    for (i=0 ; i<5 ; i++){
        name_std.push(prompt('enter student name ' + i))
        precentage.push(prompt('enter student percentage ' +i))
} 
    for (i=0; i<=precentage.length-1 ;i++)
    {
        if(precentage[i] == Math.max(...precentage))
        {
            console.log('name = ' + name_std[i] + ' percentage = '+precentage[i])
        }
    }
}
console.log(vi())
// //arrow function
let vi=()=>{
    for (i=0 ; i<5 ; i++){
        name_std.push(prompt('enter student name ' + i))
        precentage.push(prompt('enter student percentage ' +i))
} 
    for (i=0; i<=precentage.length-1 ;i++)
    {
        if(precentage[i] == Math.max(...precentage))
        {
            console.log('name = ' + name_std[i] + ' percentage = '+precentage[i])
        }
    }
}
console.log(vi())

/**
 * IIFEs - Immediately Invoked Function Expression
* single instance of an object
* saves you from polluting the local/global namespace.
* to declare IIFEs we use "grouping operator" ie ()
*/
console.log((function(){
    
    for (i=0 ; i<5 ; i++){
        name_std.push(prompt('enter student name ' + i))
        precentage.push(prompt('enter student percentage ' +i))
} 
    for (i=0; i<=precentage.length-1 ;i++)
    {
        if(precentage[i] == Math.max(...precentage))
        {
            console.log('name = ' + name_std[i] + ' percentage = '+precentage[i])
        }
    }
})())
