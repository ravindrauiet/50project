const btnE1 = document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContentE1 = document.querySelector(".trailer-container");
const videoE1 = document.querySelector("video");

btnE1.addEventListener("click", () =>{
    trailerContentE1.classList.remove("active");
});

closeIconE1.addEventListener("click", () =>{
    trailerContentE1.classList.add("active");
    videoE1.pause();
    videoE1.currentTime = 0;
});
