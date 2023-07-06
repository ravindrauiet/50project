const starsE1 = document.querySelectorAll(".fa-star");
const emojiE1 = document.querySelectorAll(".fas");
const colorArray = ["red","orange","lightblue","lightgreen","green"]

updatingRating(4);

starsE1.forEach((starsE1, index) => {
    starsE1.addEventListener("click", () => {
        updatingRating(index);
    });
});

function updatingRating(index) {
    starsE1.forEach((starsE1, idx) => {
        if(idx<index+1){
            starsE1.classList.add("active");
        }else{
            starsE1.classList.remove("active");
        }
    });

    emojiE1.forEach((emojiE1) => {
        emojiE1.style.transform = `translate(-${index*50}px)`;
        emojiE1.style.color = colorArray[index];
    });

}