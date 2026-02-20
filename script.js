let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let counter = document.getElementById("counter");
let clearBtn = document.getElementById("clear");
let tasks =JSON.parse(localStorage.getItem("tasks")) || [];

function createTask(text,done=false){
let li =document.createElement("li");
  li.innerText= text;
  if(done){
li.classList.add("done");
  }
  li.addEventlistener("click",function(){
   li.classList.toggle("done");
    saveTasks();
  });

let delbtn = document.createElement("button");
delbtn.innerText ="❌";
delbtn.addEventListener("click",function(e){
  e.stopPropagation();
  li.remove;
  saveTasks();
});
li.appendChild(delbtn);
list.appendChild(li);
}
btn.addEventListener("click",function(){
let value = input.value.trim();
  if(value===""){
    return;
  }
  createTask(value);
  input.value ="";
  saveTasks();
});
input.addEventListener("keydown",function(e){
if(e.key==="Enter"){
  btn.click();
}
});
function saveTasks(){
  tasks = [];
  document.querySelectorAll("li").forEach(li=>{
    tasks.push({
      text:li.firstChild.textContent,
      done:li.classList.contains("done")
    });
  });
  localStorage.setItem("tasks",JSON.stringify(tasks));
  counter.innerText ="Tasks: "+ tasks.length;
}
tasks.forEach(task=>{
  createTasks(task.text,task.done);
});
counter.innerText= "Task: "+ tasks.length;
clearBtn.addEventListener("click",function(){
  list.innerHTML="";
  localStorage.removeItem("tasks");
  counter.innerText="Tasks: 0";
});




