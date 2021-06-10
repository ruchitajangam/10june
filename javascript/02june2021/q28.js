//28. Prompt for an integer, then display the sum of the integers from 0 through the number entered.  
//For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
// Get the upper bound.  
var max = 1*prompt ("Please enter an integer.");  
var sum = 0;  
for (var i=0; i<=max; i++) 
{
    sum = sum + i   
}  
alert("The sum of 0 through(to) "+max+" is "+sum);
