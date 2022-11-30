const advice = document.querySelector(".advice-container h2");
const btn = document.getElementById("diceBtn");
const adviceNum = document.getElementById("advice-number");
const numArray = [];

async function getAdvice() {
    const url = `https://api.adviceslip.com/advice/{slip_id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    adviceNum.innerHTML = `ADVICE #${data.slip.id}`;
    advice.innerHTML = `${data.slip.advice}`;


}

function getRandomSlip (min, max) {
    return Math.random() * (max - min) + min;
}

function storeNum(){
    if(numArray.includes(adviceNum)){
        getRandomSlip();
    } else {
        numArray.push(adviceNum);
    }
}


getRandomSlip(1, 225);
getAdvice();

btn.addEventListener("click", getAdvice);
