const inputE1 = document.querySelector(".input");

const bodyE1 = document.querySelector("body");

inputE1.checked = JSON.parse(localStorage.getItem("mode"));

inputE1.checked = false;

updateBody();

function updateBody(){
    if (inputE1.checked) {
        bodyE1.style.background = "black";
    }else{
        bodyE1.style.background = "white";
    }
}

inputE1.addEventListener("input" , ()=>{
    updateBody();
})

function updateLocalStorage(){
    localStorage.setItem("mode" , JSON.stringify(inputE1.checked));
}