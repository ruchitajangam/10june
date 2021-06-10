/***
 * 26. Prompt the user for a number in the range 0…100.  
 * If the number is out of range, display an error message and prompt again until a valid number is entered.  
 * Assume the user enters a number each time. 

 */

var n = prompt("Please enter a number in the range 0…100")
  while (n<0 || n>100)  
{  
alert(n +" is out of range. Try again.")  
n = prompt("Please enter a number in the range 0…100") 

}  
while (true)  
{  
 var n = prompt("Please enter a number in the range 0…100")
    if (n>=0 && n<=100) {
        break
    }  
 alert(n +" is out of range. Try again.") 
}  
