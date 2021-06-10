/* Repeat previous exercise, but this time allow for the possibility that
 the user enters something that is not a number.  Hint: the built in function isNaN(x)
  returns true if x is not a number. 
It returns false if x is a number.  
Sort of backwards, but that's what's available. 
**/   
var n = prompt("Please enter a number in the range 0…100")
while (isNaN(n) || n<0 || n>100)  
{  
 alert(n +" is out of range or not a number. Try again.")
 n = prompt("Please enter a number in the range 0…100")
}  

while (true)  
{  
 var n = prompt("Please enter a number in the range 0…100")
if (!isNaN(n) && n>=0 && n<=100)
{
    break
}   
alert(n +" is out of range or not a number. Try again.")
  } 
