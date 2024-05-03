// declaring variables here
const winbox = document.querySelector(".win");
const boxnum1 = document.querySelector(".box1");
const boxnum2 = document.querySelector(".box2");
const boxnum3 = document.querySelector(".box3");
const boxnum4 = document.querySelector(".box4");
const boxnum5 = document.querySelector(".box5");
const boxnum6 = document.querySelector(".box6");
const boxnum7 = document.querySelector(".box7");
const boxnum8 = document.querySelector(".box8");
const boxnum9 = document.querySelector(".box9");
let lettervalue = true;
let box1value = true;
let box2value = true;
let box3value = true;
let box4value = true;
let box5value = true;
let box6value = true;
let box7value = true;
let box8value = true;
let box9value = true;

boxnum1.addEventListener("click",()=>{
    if(box1value == true){
        if(lettervalue == true){
            boxnum1.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box1value = false;
        }else{
            boxnum1.innerText="O"; 
            lettervalue = true;  
            box1value = false;
        }
    }
    winX();
    winO()
});
boxnum2.addEventListener("click",()=>{
    if(box2value == true){
        if(lettervalue == true){
            boxnum2.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box2value = false;
        }else{
            boxnum2.innerText="O"; 
            lettervalue = true;  
            box2value = false;
        }
    }
    winX();
    winO()
});
boxnum3.addEventListener("click",()=>{
    if(box3value == true){
        if(lettervalue == true){
            boxnum3.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box3value = false;
        }else{
            boxnum3.innerText="O"; 
            lettervalue = true;  
            box3value = false;
        }
    }
    winX();
    winO()
});
boxnum4.addEventListener("click",()=>{
    if(box4value == true){
        if(lettervalue == true){
            boxnum4.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box4value = false;
        }else{
            boxnum4.innerText="O"; 
            lettervalue = true;  
            box4value = false;
        }
    }
    winX();
    winO()
});
boxnum5.addEventListener("click",()=>{
    if(box5value == true){
        if(lettervalue == true){
            boxnum5.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box5value = false;
        }else{
            boxnum5.innerText="O"; 
            lettervalue = true;  
            box5value = false;
        }
    }
    winX();
    winO()
});
boxnum6.addEventListener("click",()=>{
    if(box6value == true){
        if(lettervalue == true){
            boxnum6.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box6value = false;
        }else{
            boxnum6.innerText="O"; 
            lettervalue = true;  
            box6value = false;
        }
    }
    winX();
    winO()
});
boxnum7.addEventListener("click",()=>{
    if(box7value == true){
        if(lettervalue == true){
            boxnum7.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box7value = false;
        }else{
            boxnum7.innerText="O"; 
            lettervalue = true;  
            box7value = false;
        }
    }
    winX();
    winO()
});
boxnum8.addEventListener("click",()=>{
    if(box8value == true){
        if(lettervalue == true){
            boxnum8.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box8value = false;
        }else{
            boxnum8.innerText="O"; 
            lettervalue = true;  
            box8value = false;
        }
    }
    winX();
    winO()
});
boxnum9.addEventListener("click",()=>{
    if(box9value == true){
        if(lettervalue == true){
            boxnum9.innerText="X";
            // console.log(boxnum1.textContent);
            lettervalue = false;
            box9value = false;
        }else{
            boxnum9.innerText="O"; 
            lettervalue = true;  
            box9value = false;
        }
    }
    winX();
    winO()
});
function winX(){
    if(boxnum1.textContent == "X" && boxnum2.textContent == "X" && boxnum3.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum4.textContent == "X" && boxnum5.textContent == "X" && boxnum6.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum7.textContent == "X" && boxnum8.textContent == "X" && boxnum9.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum1.textContent == "X" && boxnum4.textContent == "X" && boxnum7.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum2.textContent == "X" && boxnum5.textContent == "X" && boxnum8.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum3.textContent == "X" && boxnum6.textContent == "X" && boxnum9.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum1.textContent == "X" && boxnum5.textContent == "X" && boxnum9.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }else  if(boxnum3.textContent == "X" && boxnum5.textContent == "X" && boxnum7.textContent == "X"){
        winbox.innerHTML = `<h1>X Player Win</h1>`
    }
}
function winO(){
    if(boxnum1.textContent == "O" && boxnum2.textContent == "O" && boxnum3.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum4.textContent == "O" && boxnum5.textContent == "O" && boxnum6.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum7.textContent == "O" && boxnum8.textContent == "O" && boxnum9.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum1.textContent == "O" && boxnum4.textContent == "O" && boxnum7.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum2.textContent == "O" && boxnum5.textContent == "O" && boxnum8.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum3.textContent == "O" && boxnum6.textContent == "O" && boxnum9.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum1.textContent == "O" && boxnum5.textContent == "O" && boxnum9.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }else  if(boxnum3.textContent == "O" && boxnum5.textContent == "O" && boxnum7.textContent == "O"){
        winbox.innerHTML = `<h1>O Player Win</h1>`
    }
}
// console.log(boxnum1.textContent == "X");