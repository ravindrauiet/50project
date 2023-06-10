const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyIconE1 = document.querySelector(".fa-copy")
const alertContainerE1 = document.querySelector(".alert-container")


btnE1.addEventListener("click", ()=>{
    createPassword()
})

copyIconE1.addEventListener("click", ()=>{
    copyPassword();
    if (inputE1.value) {
        alertContainerE1.classList.remove("active");
    setTimeout(()=>{
        alertContainerE1.classList.add("active");
    },2000);
}
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@$%^&*()_-+,./:{}[]ABCDEGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNUm = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNUm, randomNUm+1);
    } 
    // console.log(password);
    inputE1.value = password;

    alertContainerE1.innerText = password + "copied!" ;
}

function copyPassword(){
    inputE1.select();
    document.execCommand('copy');
}



