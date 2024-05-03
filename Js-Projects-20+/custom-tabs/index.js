const home = document.querySelector(".Home");
const service = document.querySelector(".Services");
const project = document.querySelector(".Projects");
const contact = document.querySelector(".Contact");
const textbox = document.querySelector(".text");
home.addEventListener("click",()=>{
    textbox.innerHTML ="<h1>this is home</h1>"
});
service.addEventListener("click",()=>{
    textbox.innerHTML ="<h1>this is service</h1>"
});
project.addEventListener("click",()=>{
    textbox.innerHTML ="<h1>this is project</h1>"
});
contact.addEventListener("click",()=>{
    textbox.innerHTML ="<h1>this is contact</h1>"
});