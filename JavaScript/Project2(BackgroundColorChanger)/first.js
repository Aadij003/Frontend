const div=document.getElementById("div");
div.addEventListener("click",(e)=>{
const child=e.target;
const body=document.querySelector('body');
body.style.backgroundColor=child.id;
})