const openbtn = document.querySelector("#openbtn");
const closebtn = document.querySelector("#closebtn");
const openpopUp = document.querySelector(".openpopup");
openbtn.addEventListener("click",()=>{
    openpopUp.style.display = "flex";
});
closebtn.addEventListener("click",()=>{
    openpopUp.style.display = "none";
});