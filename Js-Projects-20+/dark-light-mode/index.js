const theme = document.querySelector(".container");
const buttn = document.querySelector(".btn");
let value = true;
buttn.addEventListener("click",()=>{
    if(value == true){
        value = false;
        theme.style.backgroundColor = "white";
        theme.style.color = "black";
        buttn.style.backgroundColor = "black"
        buttn.style.color = "white"
    }else{
        value = true;
        theme.style.backgroundColor = "black";
        theme.style.color = "white";
        buttn.style.backgroundColor = "white"
        buttn.style.color = "black"
    }
})