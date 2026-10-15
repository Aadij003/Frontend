
// console.log("Start");



// One way to write promise code is:
// const p1=fetch("https://api.github.com/users");

// first of all fetch operation is performed , it will return a promise to p1 either fulfilled or rejected


//console.log(p1)        output= Promise {<pending>}
// if we print p1 rightaway then we will get 'Promise {<pending>}' at the output 
// it is because after requesting from github server , p1 wents to pending state 
// then if server fulfills the request then it is known as 'fulilled' , but if server rejects the request the it is said to be 'rejected'
// promise is either it will be fulfilled or rejected
// promise is rejected only when there is : Internet down or Server down or DNS down
// Whenever server responds it will come in fulfilled category

// fulfilled/rejected can be checked by

// .then is basically used to check whether promise fulfilled or rejected
// const p2=p1.then((response)=>{                   // this function will only run when request is either fulfilled or rejected
// return response.json();                           // if we only write 'return response' then we get byte streamable data but we want data in the form of javascript object therefore we write 'return response.json'
// })                                                 // .json converts data into javascript object but this is also a heavy task to do therefore it is also asynchronous task therefore it will also return a promise and this is the reason we made p2 variable, to store the promise returned by '.json()'

// p2.then((data)=>{
//     console.log(data);
// })

// console.log("End");


// promise chaining
// better way to write promise code is this(basically what we wrote above is what this better way is, only chnage is we did'nt used p1 and p2)

// fetch("https://api.github.com/users").then((response)=>{
//  return response.json();
// }).then((data)=>{
//     console.log(data);
// })
 

// json = javascript object notation

// converting javascript object into JSON
// const obj={
//     name:"ABC",
//     Age:10,
//     ID:123,
//     c:undefined,
// }
// const convertedJson= JSON.stringify(obj);
// console.log(convertedJson);


// A JSON format is like this:
// const jsonFormat=`{
// "name":"ABC",
// "age":10,
// "ID":123    
// }`;


// converting JSON into javascript object
// const javascriptObj=JSON.parse(jsonFormat);
// console.log(javascriptObj);



// server always responds and that response is marked as fulfilled, so any request made to server then server will always responds, even if server is not providing any information then also it will respond and that will also be marked as fulfilled but let's say if there is a problem from the client or requester side like internet issue or wrong url in these cases the problem is on the client side therefore we need to fix these errors from our side(client) therefore we use try and catch
// reject condition only occurs when we are not able to connect to the server due to internet issue or wrong url , in these cases we are not able to reach to the server so the server can't respond and if server is not responding then it is the problem on client side which should be solved using try catch  

// .then only runs when the server has responded , if promise is rejected due to reasons like network down or server down or dns down then we use catch to handle these errors