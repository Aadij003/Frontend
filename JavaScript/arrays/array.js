             //Array

// let marks=[40,50,75,80,90];
// console.log(marks);

// let arr=[10,'A',"ABCD",true];
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr);
// console.log(arr[2]);

//push operation--> adds element at last
// arr.push(20);


//pop operation -> deletes element from end of array
// arr.pop();
// arr.pop();
// console.log(arr);


// add element at the starting of array
// arr.unshift(30);
// console.log(arr);

// delete first element of array
// arr.shift();
// console.log(arr);



// let arr=[10,20,30,40,50];
// iterating with for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//iterating with for..of loop
// for(let num of arr){
//     console.log(num);
// }



// const arr=[10,20,30,40];
// // arr=[50,60,70,80];            // error because arr contains address and there is const present before arr which means that anything present in arr should not be changed,here arr is having address but when we are actually realloacting different elements inside arr then address would get changed but since const is present as a prefix then arr is not supposed to change its address hence here resulting in the error
// arr[0]=5;        // this is allowed as we are not changing the address of array, instead we are changing the value at particular index
// console.log(arr);


//slicing in array
// let arr=[10,20,30,40,50];
// let arr2=arr.slice(1,4);
// console.log(arr2);
// console.log(arr);

// remove elements from original array
// const arr=[10,20,30,40,50];      // original array
// arr.splice(0,3);
// console.log(arr);
// in splicing we make changes in original array but in slicing original array is not changed



// merging 2 arrays with spread operation
// const arr=[10,'A',"ABCD",true];
// const arr2=[100,'A',200];
// const arr3=[1000];
// without spread operation 
// 1)arr.push(arr2,arr3);
// console.log(arr);

//2) const arr4=arr.concat(arr2,arr3);
// console.log(arr4);


//3)
// const arr4=[arr,arr2,arr3];
// console.log(arr4);


//using spread operation
// const arr4=[...arr,...arr2,...arr3];
// console.log(arr4);


//converting array into string 
// const arr=["Rohit","Mohit","Arjun"];
// console.log(arr.toString());      // output= Rohit,Mohit,Arjun

// console.log(arr.join(" "));      // output= Rohit Mohit Arjun
// console.log(arr.join("-"));       //output= Rohit-Mohit-Arjun


// searching in array
// const arr=["Rohit","Mohit","Arjun","Mohit"];
// console.log(arr.indexOf("Mohit"));                //output = 1
// console.log(arr.lastIndexOf("Mohit"));            //output= 3
// console.log(arr.includes("Rohit"));                //output= true
// console.log(arr.includes("rohit"));                 //output= false


//sorting in array
// const arr=[25,90,70,10,20];
// arr.sort((a,b)=> a-b);
// console.log(arr);

const arr=[1,2,3,[4,5,[10,20,30]],7,8,9];
// console.log(arr[3][2][2]);      // output 30

const a=arr.flat(2);
console.log(a);           //output=  [ 1,2,3,4,5,10,20,30,7,8,9 ]
