let name_std = []
let precentage = []
for (i=0 ; i<5 ; i++)
{
    name_std.push(prompt('Enter student name ' + i))
    precentage.push(prompt('Enter student percentage ' +i))
}
for (i=0; i<=precentage.length-1 ;i++)
{
    if(precentage[i] == Math.max(...precentage))
    {
        console.log('name = ' + name_std[i] + '  percentage = '+precentage[i])
    }
}