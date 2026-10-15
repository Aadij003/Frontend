// async await 

// async function always returns a promise
// async function Name(){
//     // return "ABC";

    // or we can also return the promise directly 
//     return new Promise((resolve,reject)=>{
//         // resolve("Hello");
//         reject("Hello");      // here since it is rejected therefore .then will not be able to handle it therefore we will use catch     
//     })

    
// }

// const a=Name();
// // console.log(a);

// // way to consume a promise 
// a.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("Error:",error);
// })



// this format is what a promise format looks like which we studied in promises
// fetch("https://api.github.com/users").then((response)=>
//     response.json()
// ).then((data)=>
//     console.log(data)
// ).catch((response)=>
//     console.log("Network off")
// );


// but if we want to simplify the format we can use async and await format
// async function print(){
// const data=await fetch("https://api.github.com/users");
// const output=await data.json();
// console.log(output);
// }
// print();
// console.log("hiiiii");



//  async function userdetail(data){
//     // const comment=await fetch("userComment");
//     // const photos= await fetch("userPhoto");
//     // const chat= await fetch("chat");

//     //above code can be optimised like
//    const [comment,photo,chat]= await Promise.all([fetch("userComment"),fetch("photo"),fetch("chat")]);
//  }