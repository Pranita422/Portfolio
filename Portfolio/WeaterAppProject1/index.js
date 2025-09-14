
// Main button event listener
async function getWeather() {
    const city = document.getElementById("city-input").value.trim();
    const apiKey = "fdd71714955a0427a2850a08bc592a3b";

    if (city !== "") {
        document.getElementById("weatherInfo").textContent = `Sample forecast for ${city}`;
        const forecastDiv = document.getElementById("forecastContainer");
        forecastDiv.classList.remove("hidden");
        forecastDiv.classList.add("forecast-visible");
    } else {
        alert("Please enter a city");
        return;
    }

    // Show time container
    const timeDiv = document.getElementById("timeContainer");
    timeDiv.classList.remove("timeHidden");
    timeDiv.classList.add("time-visible");

    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(currentWeatherURL);

    try {
        const response = await fetch(currentWeatherURL);
        const data = await response.json();

        
        const temperatureKelvin = data.main.temp;
        const temperatureCelsius = temperatureKelvin - 273.15;
        const description = data.weather[0].description;
        const cityName = data.name;
        const mainCondition = data.weather[0].main.toLowerCase();
        setWeatherBackground(mainCondition);

        const weatherInfoDiv = document.getElementById("weatherInfo");
        weatherInfoDiv.innerHTML = `
            <h2>${cityName}</h2>
            <p>Temperature: ${temperatureCelsius.toFixed(2)}°C</p>
            <p>Description: ${description}</p>
        `;
        const iconBaseURL = "http://openweathermap.org/img/w/";
        const iconCode = data.weather[0].icon;
        const iconURL = iconBaseURL + iconCode + ".png";
        const weatherIcon = document.getElementById("weatherIcon");
        weatherIcon.src = iconURL;

        await getForecast(city, apiKey);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Attach event listener to button
document.getElementById("button").addEventListener("click", getWeather);

// Forecast Function  
async function getForecast(city, apiKey) {
    console.log("getForecast function called");

    const forecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(forecastURL);
        const data = await response.json();
        console.log("Forecast data:", data);

        displayHourlyForecast(data.list);

        const forecastDates = document.querySelectorAll(".forecastClass h3");
        const forecastIcons = document.querySelectorAll(".forecastClass img");
        const forecastTemps = document.querySelectorAll(".forecastClass p");
       
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        for (let i = 0; i < 5; i++) {
            const forecast = data.list[i * 8];
            const dateNew = new Date(forecast.dt * 1000);
            const dayOfWeek = dateNew.getDay();
            const temperatureCelsius = forecast.main.temp - 273.15;
            const iconCode = forecast.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;

            //forecastDates[i].textContent = `${days[dayOfWeek]} ${dateNew.toLocaleDateString()}`;
            forecastDates[i].textContent=days[dayOfWeek]+" "+dateNew.toLocaleDateString();
            forecastIcons[i].src = iconURL;
            forecastTemps[i].textContent = `${temperatureCelsius.toFixed(2)}°C`;
            
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

// Hourly Forecast Function
function displayHourlyForecast(forecastList) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    hourlyForecastDiv.innerHTML = '';

    const next24Hours = forecastList.slice(0, 16);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const temperature = (item.main.temp - 273.15).toFixed(1);
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        
        const hourlyItemHtml = `
            <div class="hourly-item">
                <div><strong>${hour}</strong></div>
                <img src="${iconUrl}" alt="Hourly weather Icon">
                <div>${temperature}°C</div>
                </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

// Set weather background
function setWeatherBackground(condition) {
    const container = document.getElementById("forecastContainer");
    container.classList.remove('clear', 'cloud', 'rain', 'snow', 'thunderstorm', 'drizzle', 'mist');

    if (condition.includes('clear')) {
        container.classList.add('clear');
    } else if (condition.includes('cloud')) {
        container.classList.add('cloud');
    } else if (condition.includes('rain')) {
        container.classList.add('rain');
    } else if (condition.includes('snow')) {
        container.classList.add('snow');
    } else if (condition.includes('thunderstorm')) {
        container.classList.add('thunderstorm');
    } else if (condition.includes('drizzle')) {
        container.classList.add('drizzle');
    } else if (
        condition.includes('mist') ||condition.includes('haze') ||condition.includes('fog')
    ) {
        container.classList.add('mist');
    } else {
        container.style.background = "#eee";
    }
}

function getWeatherIcon(description) {
    description = description.toLowerCase();

    if (description.includes("few clouds")||(description.includes("clear")||(description.includes("overcast")) )) return "cloud.png";
    if (description.includes("scattered clouds")) return "sun.png";
     if(description.includes("broken clouds")) return "broken.png";
    if (description.includes("rain")) return " rainy.png";
    if (description.includes("shower")) return "cloudy.png";
    if (description.includes("thunderstorm")) return "thunderstorm.png";
    if (description.includes("snow")) return "snowy.png";
    }

// Dropdown Function    
async function toggleDropdown(element) {
    const targetId  = element.getAttribute("data-target");
    const dropdown = document.getElementById(targetId);
    const icon = element.querySelector(".plus");

    //close the open dropdown
    document.querySelectorAll('.dropdownPanel').forEach(panel => {
        if(panel.id !== targetId){
            panel.classList.remove('open');
        }
    });
    
    //const dropdown = document.getElementById("dropdownContent");
   const isOpen=dropdown.classList.toggle("open");
    icon.textContent = isOpen ? '−' : '+';


    // Clear previous content
    dropdown.innerHTML = '';

    // Fetch current weather data 
    const city = document.getElementById("city-input").value.trim(); 
    const apiKey = "fdd71714955a0427a2850a08bc592a3b"; 
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 
    
try { 
        const response = await fetch(currentWeatherURL); 
        const data = await response.json(); 
    
    const utcSunrise = data.sys.sunrise * 1000;
    const utcSunset = data.sys.sunset * 1000;
    const timezoneOffset = data.timezone * 1000;

     const temperatureKelvin = data.main.temp;
        const temperatureCelsius = temperatureKelvin - 273.15;
        const description = data.weather[0].description;
        const iconSrc = getWeatherIcon(description);
        
        const iconImg = `<img src="${iconSrc}" alt="weather icon" style="height: 100px; width: 100px; vertical-align: middle; margin-left: 10px;">`;

        const humidity = data.main.humidity; 
        const visibility = data.visibility / 1000; // Convert to km 
        const sunrise = new Date(utcSunrise).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const sunset = new Date(utcSunset).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
       
        
    // Populate dropdown with data
    const dropdownHTML=`
    <div class="humidityContainer">
       
     <div class="temperatureClass">
     ${temperatureCelsius.toFixed(0)}°
     ${iconImg}<br>
     <span class="descSpan">${description}</span>
     </div>

    <div id="div1">
    
    <div class="humidityClass">💧 Humidity:  <span class="humiditySpan">${humidity}%</span> </div>
    <div class="visibilityClass">👁️ Visibility: <span class="visibilitySpan"> ${visibility.toFixed(1)} km </span></div>
    
    <div class="divider"></div>

    <div class="sunriseClass">🌅 Sunrise: <span class="sunriseSpan">${sunrise}</span></div>
    <div class="sunsetClass">🌇 Sunset:<span class="sunsetSpan"> ${sunset}</span></div>
    
     </div>
    `
    dropdown.innerHTML = dropdownHTML ;
        
}catch (error) { 
        console.error("Error fetching current weather data:", error);  
    } 


}


     

