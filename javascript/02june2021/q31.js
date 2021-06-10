//31. sum(n); displays the sum of 0+1+2+…+n. 
function sum(n)  
{  
 var total=0;  
 for (var i=0;i<=n;i++)  
 total=total+i;  
 alert("The sum of 0 through "+n+" is "+total);  
}  
sum(34)