const apiKey = "dc08f59cb5d83e2c874c18d3b76d7ab1";

async function getWeatherData() {
    const city = document.getElementById("cityNameInput").value;
    const respond = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    data = await respond.json();
    
    const weatherStatus = document.getElementById("weatherStatus");
    if(data.weather[0].main === "Clouds"){
        weatherStatus.textContent = "☁️";
    }
    else if(data.weather[0].main === "Clear"){
        weatherStatus.textContent = "☀️";
    }
    else if(data.weather[0].main === "Rain"){
        weatherStatus.textContent = "🌧️";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherStatus.textContent = "🌦️";
    }
    else if(data.weather[0].main === "Mist"){
        weatherStatus.textContent = "💨";
    }

    const cityName = document.getElementById("cityName");
    cityName.textContent = data.name;

    const temperature = document.getElementById("temperature");
    temperature.textContent = `${data.main.temp}°C`;

    const windSpeed = document.getElementById("windSpeed");
    windSpeed.textContent = `🍃 ${data.wind.speed} KM/HR`; 

    const humidity = document.getElementById("humidity");
    humidity.textContent = `💧 ${data.main.humidity}%`

    const weatherCard = document.querySelector('.weatherCard');
    weatherCard.style.display = 'block';
}