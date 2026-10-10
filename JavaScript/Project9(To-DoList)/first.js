const form=document.querySelector('form');
const result=document.getElementById("AllTasks");
const input=document.getElementById("task");


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const text=input.value.trim();


    if(text==""){
     return;
    }
  

      const parent= document.createElement('div');
      parent.style.marginTop="20px";

      const task=document.createElement('span');
      task.textContent=text;

      const deleteButton=document.createElement('button');
      deleteButton.textContent="Delete";
      deleteButton.style.width="60px";

      const done=document.createElement('button');
      done.textContent="Done";
      done.style.width="50px";

      done.style.marginRight="10px";
      task.style.marginRight="10px";
      

      parent.append(task,done,deleteButton);

      result.append(parent);

      deleteButton.addEventListener('click',()=>{
        parent.remove();
      })
      
      done.addEventListener('click',()=>{
        task.style.textDecoration='line-through';
task.style.color='grey';
      })


   })