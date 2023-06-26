const menuE1 = document.querySelector(".menu")
const menuTextE1 = document.querySelector(".menu p")
const socialListsE1 = document.querySelector(".social-lists")
const listsE1s = document.querySelectorAll(".social-lists li")


menuE1.addEventListener("click", () =>{
    socialListsE1.classList.toggle("hide");
    menuE1.classList.toggle("rotate");
});

listsE1s.forEach(liE1 => {
    liE1.addEventListener("click", () =>{
        menuTextE1.innerHTML = liE1.innerHTML;
        socialListsE1.classList.add("hide");
        menuE1.classList.toggle("rotate");
    })
})