//Trace the following program by showing the text of the alert messages that are displayed when it runs.
// There are no errors. 
var x =5;  
var y =1;  
while (x > 0){  
x = x-1;  
y = y*x;  
alert(x + "  " + y);  
}  

//
var i;  
var count =0;  
for (i =0; i < 11; i++)
{ 
    if (i < 3 || 7 <i)
    {  
        count++  
        alert(count + " i " + i + " range 1");  
}
    else if (i == 5)
    {  
        count++ 
        alert(count + " i " + i + " range 2");  
}  
    if ( 2<= i && i < 7)
    {  
    count++
    alert(count + " i " + i + " range 3");  
}  
}  
