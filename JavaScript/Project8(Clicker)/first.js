const body=document.querySelector('body');
body.addEventListener('click',(e)=>{


    const circleElement=document.createElement('div');
    circleElement.classList.add('circle');

    const color=['red','blue','green','yellow','orange'];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*5)];

    circleElement.style.top=`${e.clientY}px`;
    circleElement.style.left=`${e.clientX}px`;
    circleElement.textContent='hii'

    body.append(circleElement);

    setTimeout(()=>{            // setTimeout is different from setInterval, setInterval repeats itself after fixed time interval but setTimeout runs only one time in the given interval
        circleElement.remove();

    },5000)    // after 5 seconds setTimeout will execute
})