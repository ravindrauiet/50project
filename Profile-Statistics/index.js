const countersE1 = document.querySelectorAll(".container");

countersE1.forEach((counterE1)=>{
    countersE1.innerText = "0";
    incrementCounter();

    function incrementCounter(){
        let currentNum = +counterE1.innerText;

        const dataCeil = counterE1.getAttribute("data-ceil");
        const increment = dataCeil/15;
        currentNum = Math.floor(currentNum + increment)
        

        if(currentNum<dataCeil){
            counterE1.innerText = currentNum
            setTimeout(increment,50)
        }else{
            counterE1.innerText = dataCeil;
        }

    }
})