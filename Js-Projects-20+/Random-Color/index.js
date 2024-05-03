const backGround = document.querySelector('.container');
const btn = document.getElementById('random');
const copyBtn = document.getElementById('copybutton');
function bgchange(){
    let red = Math.floor(Math.random()*255)+1;
    let green = Math.floor(Math.random()*255)+1;
    let blue = Math.floor(Math.random()*255)+1;
    var rgb = `rgb(${red}, ${green}, ${blue})`;
    backGround.style.backgroundColor = rgb;
    console.log(rgb);
    return rgb;
}
btn.addEventListener('click',()=>{
   bgchange();
   
});

