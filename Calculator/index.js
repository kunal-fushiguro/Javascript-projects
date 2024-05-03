const display = document.querySelector("#display");
function clickvalue(input){
    display.value += input;
}
function clearvalue(){
    display.value = "";
}
function calculatevalue(){
    display.value = eval(display.value);
    // try{
    //     display.value = eval(display.value);
    // }
    // catch{
    //     display.value = "Error";
    // }
}