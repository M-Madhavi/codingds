function arrange(arr,n)
{
    n=arr.length
    var ev=[],ov=[];
arr.sort(function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

for (let i = 0; i < n; i++)  
if (arr[i] % 2 == 0)  
    ev.push(arr[i]);  
else
    ov.push(arr[i]);  


 var index =0,i=0,j=0,setval=false
 
 if(arr[0]%2 == 0)
 setval=true
 while (index < n)  
 {  

     // If first element is even  
     if (setval == true)  
     {  
         arr[index] = ev.pop(i);  
         i += 1 ; 
         index += 1 ; 
         setval = !setval;  
     }  

     // Else, first element is Odd  
     else
     {  
         arr[index] = ov.pop(j) ;  
         j += 1 ; 
         index += 1 ; 
         setval = !setval;  
     }  
 }  
for (i = 0; i < n; i++) 

console.log(arr[i ] +" ")
return arrange
 
} 
console.log(arrange([9,8,13,2,19,14],6)) 




