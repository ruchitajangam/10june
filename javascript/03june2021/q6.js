let v =[10,3,1,2]
product = 1 
sum=0
for(i=0 ; i<v.length ; i++){
    product = product*v[i]
    sum = sum+v[i]
}
console.log(`Sum : ${sum} and product : ${product}`)