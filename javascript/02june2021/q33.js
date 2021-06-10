// isInteger(n) returns true is n is an integer 0…100.  Hint: use isValid 
function isValid(n)  
{   
 if (isNaN(n)) 
 {
    return false
 }     
 return (n>=0) && (n<=100)  
}  
function isInteger(n)  
{   
 if (!isValid(n)) {
     return false
     
  }  
return (Math.floor(n)==n)
}  
console.log(isInteger(45.0))

