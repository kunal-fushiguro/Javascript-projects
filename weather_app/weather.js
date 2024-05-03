const apikey = "560d4759f292016263d064abfc69bb2a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weatherIcon");
async function checkweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await fetch(response.json);
        console.log(response);
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/H";
        if(data.weather[0].main == "clouds"){
            weatherIcons.src="images/clouds.png";
        }
        else if(data.weather[0].main == "clear"){
            weatherIcons.src="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcons.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcons.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "mist"){
            weatherIcons.src="images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display="none";
    }
    console.log(apiurl+city+`&appid=${apikey}`);
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
async function che(){
    const res = await fetch(apiurl+city+`&appid=${apikey}`);
}