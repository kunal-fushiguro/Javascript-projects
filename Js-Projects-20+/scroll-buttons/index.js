const downbtn = document.querySelector("#down");
const topbtn = document.querySelector("#top");
downbtn.addEventListener('click',()=>{
    window.scrollTo({
        top: window.outerHeight,
        behavior:'smooth'
    });
});
topbtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});