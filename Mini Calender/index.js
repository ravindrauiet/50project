const monthnameE1 = document.getElementById("month-name")
const daynameE1 = document.getElementById("day-name")
const daynumberE1 = document.getElementById("day-number")
const yearE1 = document.getElementById("year")

const date = new Date();
const month = date.getMonth() 
monthnameE1.innertext = date.toLocaleString("en", {month: "long"});

daynameE1.innerText = date.toLocaleString("en", {weekday : "long"});

daynumberE1.innerHTML = date.getDate();

yearE1.innerText = date.getFullYear();

