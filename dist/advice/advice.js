const advice = document.getElementById("advice-container");
const btn = document.getElementById("diceBtn");
const adviceNum = document.getElementById("advice-number");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => console.log(data));

    advice.innerHTML = `<p>${data.advice}</p>`;
}


getAdvice();
btn.addEventListener("click", getAdvice);
adviceNum.addEventListener("click", adviceNum.innerHTML(Math.random()))