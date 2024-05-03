const Next = document.querySelector("#next");
const Previous = document.querySelector("#previous");
const bar25 = document.querySelector(".progress25");
const bar50 = document.querySelector(".progress50");
const bar75 = document.querySelector(".progress75");
const bar100 = document.querySelector(".progress100");
let value = 1;
// Previous.disabled = true;
Next.addEventListener('click',()=>{
    // console.log("hello");
    if(value == 1){
        bar25.style.backgroundColor = "blue";
        bar25.textContent = "25%";
        value++;    
    }else if(value == 2){
        bar50.style.backgroundColor = "blue";
        bar25.textContent = "50%";
        value++;    
    }else if(value == 3){
        bar75.style.backgroundColor = "blue";
        bar25.textContent = "75%";
        value++;    
    }else if(value == 4){
        bar100.style.backgroundColor = "blue";
        bar25.textContent = "100%";
        value++;    
    }
});
Previous.addEventListener('click',()=>{
    // console.log("hello");
    if(value == 5){
        bar100.style.backgroundColor = "red";
        bar25.textContent = "75%";
        value--;    
    }else if(value == 4){
        bar75.style.backgroundColor = "red";
        bar25.textContent = "50%";
        value--;    
    }else if(value == 3){
        bar50.style.backgroundColor = "red";
        bar25.textContent = "25%";
        value--;    
    }else if(value == 2){
        bar25.style.backgroundColor = "red";
        bar25.textContent = "0%";
        value--;    
    }
});