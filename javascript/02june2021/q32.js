/* isValid(n) returns true if n is a number 0…100. 

** */  
function isValid(n)  
{   
 if (isNaN(n)) 
 {
    return false
 }     
 return (n>=0) && (n<=100)  
}  
console.log(isValid(789))
