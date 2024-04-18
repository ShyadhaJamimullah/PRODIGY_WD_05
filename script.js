let API_KEY="6af442073409643fbc84f6a7b696dbb4"

getWeatherData=(city)=>{
    const URL="https://api.openweathermap.org/data/2.5/weather"
    const Full_Url=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise=fetch(Full_Url);
    console.log(city)
    return weatherPromise.then((response)=> {
        return response.json()

    })
}

function searchCity(){
    const city=document.getElementById("loc-input").value;
    getWeatherData(city)
    .then((response)=>{
        console.log(response)
        showWeatherData(response); // Call showWeatherData function with response
    })
    .catch((err) =>{
        console.log(err)
    })
}

showWeatherData=(WeatherData)=>{
    document.getElementById('city-name').innerText = WeatherData.name;
    document.getElementById('weather-type').innerText = WeatherData.weather[0].main;
    document.getElementById('temp').innerText = WeatherData.main.temp;
    document.getElementById('min-temp').innerText = WeatherData.main.temp_min;
    document.getElementById('max-temp').innerText = WeatherData.main.temp_max;
}

