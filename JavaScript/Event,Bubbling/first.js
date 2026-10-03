

//                              EVENT
//                      1
//      Method 1
// function handleClick(){
//     const element=document.getElementById("first")
//     element.textContent="HI Everyone !!";
 
// }


//      Method 2
// const click=document.getElementById("first");
// click.onclick=function handleClick(){
//     click.textContent="HI EVERYONE !!";
// };


//     Method 3(best method)
// const click=document.getElementById("first");


// click.addEventListener("click",()=>{
//     click.textContent="HI EVERYONE !!";
// })

// click.addEventListener("dblclick",()=>{

//     click.style.color="blue";
//     click.style.width="100vw";
//     click.style.textAlign="center";
//     click.style.fontStyle="Italic";

// });

// click.addEventListener("mouseenter",()=>{
//     click.style.fontSize="70px";
// });



// const child1=document.getElementById("child1");
// child1.addEventListener("click",()=>{
//     child1.textContent="CLICKED";
// })

// const child2=document.getElementById("child2");
// child2.addEventListener("click",()=>{
//     child2.textContent="CLICKED";
// })

// const child3=document.getElementById("child3");
// child3.addEventListener("click",()=>{
//     child3.textContent="CLICKED";
// })

// const child4=document.getElementById("child4");
// child4.addEventListener("click",()=>{
//     child4.textContent="CLICKED";
// })

// const child5=document.getElementById("child5");
// child5.addEventListener("click",()=>{
//     child5.textContent="CLICKED";
// })

// instead of adding event listener to every child (like we did above), we can apply a for loop  

// const parent=document.getElementById("parent");
// for(let child of parent.children){
//     child.addEventListener("click",()=>{
//         child.textContent="CLICKED";
//     });
// }



// three phases:
// capture phase  ----> DOM tree starts form window
// target phase   -----> goes till the target 
// bubbling phase   ----> bubbling phase starts where it goes back and checks for other addEventListener


//                           BUBBLING
//                  2

// const grandparent= document.getElementById("grandparent");
// grandparent.addEventListener("click",()=>{
//    console.log("Grandparent is clicked");
// },false)                                // here false depicts that the capture phase is off which means if we clicked child then 
                                        // traversing would start from window and go till the child(i.e.the target) and then in the bubble phase it would traverse back to parent and since it has false value therefore it will execute the addEventListener of the parent and similarly for the grandparent



// const parent= document.getElementById("parent");
// parent.addEventListener("click",()=>{
//  console.log("parent is clicked");
// },false)


// const child= document.getElementById("child");
// child.addEventListener("click",()=>{
//     console.log("child is clicked");
// },false)
// so output would be 
// child is clicked
// parent is clicked
// Grandparent is clicked



// but if we mark true 
const grandparent= document.getElementById("grandparent");
grandparent.addEventListener("click",()=>{
   console.log("Grandparent is clicked");
},true)                                // here true depicts that the capture phase is on which means if we clicked child then 
                                        // traversing would start from window and go till the child(i.e.the target) but when it starts its traversing it will firstly reach grandparent where capture phase is on so it will check addEventListener for grandparent and then similarly for parent and then finally it would reach to child and check addEventListener , now since target phase is completed it would go to bubble phase and it would traverse back to parent and grandparent where capture phase is set on , that means it already went and preformed eventListener

const parent= document.getElementById("parent");
parent.addEventListener("click",()=>{
 console.log("parent is clicked");
},true)


const child= document.getElementById("child");
child.addEventListener("click",()=>{
    console.log("child is clicked");
},true)