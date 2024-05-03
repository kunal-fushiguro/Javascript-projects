let jokeText = document.getElementById("joke");
let btn = document.getElementById("jokebtn");
// let url = 'https://geek-jokes.sameerkumar.website/api?format=json';
let url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// jokeText.textContent();        
function gettingJoke(){
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        // console.log(item);
        jokeText.textContent = `${item.joke}`;
        // jokeContainer.textContent = `${item.joke}`;
        // jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",gettingJoke);