let url2 = 'https://geek-jokes.sameerkumar.website/api?format=json';
let jokeText = document.getElementById("joke");
let btn = document.getElementById("jokebtn");
function sendrequest(method,url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something Went wrong"));
            }
        }
        xhr.send();
    })
}
function getdata(){
sendrequest("GET",url2).then((response)=>{
    // console.log(response);
    const data = JSON.parse(response);
    // console.log(data.joke)
    jokeText.textContent = data.joke;
})
}
btn.addEventListener("click", getdata);