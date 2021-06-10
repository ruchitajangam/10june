//read the number and arrange them in asecending order
n1=1*prompt("Enter the first number:")
n2=1*prompt("Enter the second number")
if(n1>n2){
    alert(`${n2},${n1}`)
}
else{
    alert(`${n1},${n2}`)
}
const ar=[1,2,3,5]
console.log(Math.max(...ar))