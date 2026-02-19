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
}
