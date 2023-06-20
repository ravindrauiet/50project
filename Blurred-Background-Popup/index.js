const containerE1 = document.querySelector(".container");
const btnE1 = document.querySelector(".btn");
const popupcontainerE1 = document.querySelector(".popup-container");
const closeIconE1 = document.querySelector(".close-icon");


btnE1.addEventListener("click", () =>{
    containerE1.classList.add("active");
    popupcontainerE1.classList.remove("active");
});

closeIconE1.addEventListener("click", () =>{
    containerE1.classList.remove("active");
    popupcontainerE1.classList.add("active");
})

