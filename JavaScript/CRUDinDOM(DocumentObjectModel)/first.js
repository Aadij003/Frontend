const newElement=document.createElement("h2");

newElement.textContent="How are You ?";
newElement.id="second";

// select element
const element=document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2=document.createElement("h3");
newElement2.textContent="What is your age ?";
newElement2.id="third";
newElement.after(newElement2);


newElement2.classList.add("Age");
newElement2.classList.add("Abc");
newElement2.style.color="blue";
console.log(newElement2.getAttribute("id"));
console.log(newElement2.getAttribute("class"));

// const unordered=document.getElementById("listing");

// inserting list inside unoredered list(ul), ul present in html file

// const list=document.createElement("li");
// list.textContent="20";
// unordered.append(list);

// const list2=document.createElement("li");
// list2.textContent="30";
// unordered.append(list2);

// const list3=document.createElement("li");
// list3.textContent="10";
// unordered.prepend(list3);

// const list4=document.createElement("li");
// list4.textContent="15";

// unordered.children[1].before(list4);                   //  or we can write -------->      list.before(list4);


// lets say we want to insert elements which are present in the array to the unoredered list(ul)
const arr=[10,15,20,30];

const unordered=document.getElementById("listing");
const fragment= document.createDocumentFragment();
for(let nums of arr){
    const list=document.createElement("li");
    list.textContent=nums;
    fragment.append(list);
}
unordered.append(fragment);

// delete any element
element.remove();


