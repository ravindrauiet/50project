const formE1 = document.querySelector(".form");
const inputE1 = document.querySelector(".input");
const ulE1 = document.querySelector(".list");


formE1.addEventListener("submit", ()=>{
    event.preventDefault();
    toDoList();
})

function toDoList(){
    let newTask = inputE1.value;
    if(newTask === ""){
        alert("Please enter a task")
    }
    else{
        const liE1=document.createElement('li');
        liE1.innerText = newTask;
        ulE1.appendChild(liE1);
        inputE1.value =""
        const checkBtnE1 = document.createElement("div");
        checkBtnE1.innerHTML=`<i class="fa-solid fa-square-check"></i>`;
        liE1.appendChild(checkBtnE1);
        const trashBtnE1 = document.createElement("div");
        trashBtnE1.innerHTML=`<i class="fa-solid fa-trash-can-arrow-up"></i>`;
        liE1.appendChild(trashBtnE1);
    }
}