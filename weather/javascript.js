const apikey = "725125b521689626af83edc242d5112a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);
    var data = await response.json();

    console.log(data);

    document.getElementsByClassName('city')[0].innerHTML = data.name
    document.getElementsByClassName('temp')[0].innerHTML = Math.round(data.main.temp) + "°C"
    document.getElementsByClassName('humidity')[0].innerHTML = data.main.humidity + "%"
    document.getElementsByClassName('wind')[0].innerHTML = data.wind.speed + "km/h"
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png"
    }
    else if (data.weather[0].main == "Wind") {
        weathericon.src = "images/wind.png"
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)

})