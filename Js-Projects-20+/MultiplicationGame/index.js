const Score = document.querySelector("#ScorePoint");
const FirstNum = document.querySelector("#FirstNum");
const SecondNum = document.querySelector("#SecondNum");
const Input = document.querySelector("#Input");
const submitBtn = document.querySelector("#btn");

let value1 = Math.floor(Math.random()*99)+1;
FirstNum.textContent = value1;
let value2 = Math.floor(Math.random()*99)+1;
SecondNum.textContent = value2;
let ScoreValue = 0;
Score.textContent = ScoreValue;
let answer =  value1*value2;

console.log(answer);
submitBtn.addEventListener('click',()=>{
    if(Input.value == answer){
        // console.log("hello");
        // console.log(ScoreValue);
        ScoreValue++;
        // console.log(ScoreValue);
        Score.textContent = ScoreValue;
    }
    value1 = Math.floor(Math.random()*99)+1;
    FirstNum.textContent = value1;
    value2 = Math.floor(Math.random()*99)+1;
    SecondNum.textContent = value2;
    Input.value = '';
    answer = value1*value2;
    console.log(answer);
});
