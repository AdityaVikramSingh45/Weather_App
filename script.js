const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-icon");
const weather_img = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const humidity = document.querySelector(".humd-details");
const wind_speed = document.querySelector(".wind-details");
const error = document.querySelector(".location-not-found");
const weather_detail = document.querySelector(".weather-details");
const weather_body = document.querySelector(".weather-body");


async function checkWeather(city){
    const api_key = "aa95f8132e800b626f1b33084e817811";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
    response.json());

    if(weather_data.cod === '404'){
        error.style.display = "flex";
        weather_detail.style.display = "none";
        weather_body.style.display = "none";
        return;
    }
    else{
    weather_detail.style.display = "flex";

    weather_body.style.display = "flex";

    error.style.display = "none";

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273)}°C`;

    desc.innerHTML = `${weather_data.weather[0].main}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Kmph`;
    
    console.log(weather_data);
    
    switch(weather_data.weather[0].main){
        case 'Cloud':
            weather_img.src = "images/clouds.png";
            break;
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "images/rain.png";
            break;
        case 'Snow':
            weather_img.src = "images/snow.png";
            break;
        case 'Mist':
            weather_img.src = "images/mist.png";
            break;  
        case 'Haze':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/3313/3313930.png";
            break;    
    }
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});

