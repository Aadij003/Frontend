


async function github(){

    try{

        if(!response.ok){
            throw new Error("Data is not present");
        }

const data=await fetch("https://api.github.com/users");
const output=await data.json();

const first=document.getElementById("first")

for(let user of output){
  const element=document.createElement('div');
  element.classList.add("user");

  const img=document.createElement("img");
  img.src=user.avatar_url;
  
  const username=document.createElement('h2');
  username.textContent=user.login;

  const anchor=document.createElement('a');
  anchor.href=user.html_url;
  anchor.textContent="Vist profile";

  element.append(img,username,anchor);
 first.append(element);
  

}


}catch(error){
console.log("Error");
}
}


github();