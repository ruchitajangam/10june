/*29. Prompt for an integer, then display the average of the integers from 0 through the number entered. 
 For example, if you enter 10, then display 5 which is the average of  
  (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11. 

** */
var max = 1*prompt ("Please enter an integer.");  
var sum = 0;  
for (var i=0; i<=max; i++)
{
    sum = sum + i
}
alert("The average of 0 through "+max+" is "+(sum/(max+1)))
