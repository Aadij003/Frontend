const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{         // e is event object 
    e.preventDefault();

    
   const input=document.getElementById("income");
   const value=parseInt(input.value);               // whenever user enters any input then input.value returns a string but here we want a number so we used parseInt to convert string to a number
   const h2=document.querySelector('h2');
   let TotalTax=0;


   if(value<=1200000){
    TotalTax=0;
   }
   else if(value<=1600000){
    TotalTax=(value-1200000)*0.15;
   }
   else if(value<=2000000){
    TotalTax=(value-1600000)*0.20+60000;
   }
   else if(value<=2400000){
    TotalTax=(value-2000000)*0.25+80000+60000;
   }
   else{
    TotalTax=(value-2400000)*0.3+100000+80000+60000;
   }

   h2.textContent=`Total Tax: ${TotalTax} Rs`;

   form.reset();
})
