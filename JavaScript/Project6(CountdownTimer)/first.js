const result=document.getElementById("result");







setInterval(()=>{
    let currentTime=Date.now();    // Date.now() returns current time in milliseconds

let OlympicTime=new Date(2028,6,14).getTime();

    let remaining= OlympicTime-currentTime;

let days=Math.floor(remaining/(1000*60*60*24));
remaining=remaining%(1000*60*60*24);

let hours=Math.floor(remaining/(1000*60*60));
remaining=remaining%(1000*60*60);

let minutes=Math.floor(remaining/(1000*60));
remaining=remaining%(1000*60);

let seconds=Math.floor(remaining/(1000));
remaining=remaining%(1000);


result.textContent=`${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
},1000)
