
 const div=document.querySelector('div');


setInterval(()=>{                 // set interval is used to perform any task repeatedly after a fixed time interval 
let time=new Date();
div.textContent=time.toLocaleTimeString();

},1000)             // 1000 here is in milliseconds , this means in every 1000 milliseconds repeat the work written inside the function


