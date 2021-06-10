var a1=1*prompt("Enter the number:")
var a=a1.toString()
var b=[a[0]]
for (let i=1;i<a.length;i++){

    if((a[i-1]%2 ===0)&&(a[i]%2 ===0)){
        b.push(a[i],'-')
    }
    else{
        b.push(a[i])
    }
}
console.log(b.join())



//console.log(arr.join('-'))
