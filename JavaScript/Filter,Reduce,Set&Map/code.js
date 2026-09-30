// forEach,Map,Filter,Reduce,Set,Map

// for each loop
// const arr=[10,20,30,40,50,60,70];

// arr.forEach((number)=>{
// console.log(number);
// }
// )

// forEach can take 3 arguments
// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
// }
// ) 

// let sum=0;
// arr.forEach((number)=>{
//     sum+=number;
// })
// console.log(sum);


// filter

// const arr=[10,20,30,40,50,60,70];
// const arr2=[3,10,90,20,60,80];


// // making own filter function in array object

// // arr.filtering= function (compare)     // this filtering function is only contained by array arr but lets suppose there is another array arr2 and we want this filtering function in that array as well so we can use Array.prototype

//     Array.prototype.filtering=function(compare){
// const ans=[];
//     for(let nums of this){
//         if(compare(nums)){
//             ans.push(nums);
//         }
//     }
//     return ans;
// }

// const ansArr=arr.filtering((number)=>number>25);
// console.log(ansArr);

// const ansArr2=arr2.filtering((number)=>number>70);
// console.log(ansArr2);


// Map
// const ansArr=arr.map((number)=>number*2);
// console.log(arr);   // original array
// console.log(ansArr);  



// const square =(num)=>{
// return num*num;
// }
// const ans=arr.map(square);
// console.log(ans);




// const arr= [
// {id:1,number:30},
// {id:2,number:40},
// {id:3,number:20},

// {id:4,number:110},
// {id:5,number:400},
// {id:6,number:7},

// {id:7,number:90},
// {id:8,number:300},
// {id:9,number:250},

// {id:10,number:19},
// {id:11,number:85},
// {id:12,number:10},

// {id:13,number:12},
// {id:14,number:17},
// {id:15,number:25},

// {id:16,number:70},
// {id:17,number:45},
// {id:18,number:50},

// {id:19,number:40},
// {id:20,number:40},
// {id:21,number:20},

// {id:22,number:30},
// {id:23,number:40},
// {id:24,number:20},


// ];

// const Numbergreaterthan70= (num)=>{
//     if(num.number>70){
//         return num;
//     }
// }


//using filter we are printing every number greater than 70 with its id as well
// const ans=arr.filter(Numbergreaterthan70);
// console.log(ans);

// // using map we are incrementing all numbers of array by 1
// const increment= (arr)=>{
//     arr.number=arr.number+1;
//     return arr;
// }

// const ans2=arr.map(increment);
// console.log(ans2);




// reduce

// finding total sum of array numbers
// const ans=arr.reduce((accumulator,currentValue)=>{
// return accumulator+currentValue.number;
// },0);

// console.log(ans);


// Data Structure: Set
// const arr=[10,10,11,12,11,15,11];
// const s1=new Set(arr);
// console.log(arr);
// s1.add(11);
// console.log(s1);
// console.log(s1.has(12));
// s1.delete(10);
// console.log(s1);
// s1.clear();
// console.log(s1);


// Data Structure : Map
const m1=new Map([
    ["ABCD",10],
    [2,"abcd"],
    [true,15],
    [[10,20,30],"xyz"]
]);
console.log(m1);

m1.set({name:"ab",age:15},false);
console.log(m1);