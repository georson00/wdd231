const apikey = "321f7fb15cfb08901851aa77bcefa5bb";
const city = "Leogane";
const weatherResult = document.getElementById("weatherResult");

function formatTime(timestamp){
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
function fetchWeatherData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`)
        .then(response =>{
            if(!response.ok){
                throw new Error("City not Found or invalid response.");
            }
            return response.json();
        })
        .then(data =>{
            const temp = Math.round(data.main.temp);
            const high = Math.round(data.main.temp_max);
            const low = Math.round(data.main.temp_min);
            const humidity = data.main.humidity;
            const weatherDesc =data.weather[0].description;
            const sunrise = formatTime(data.sys.sunrise);
            const sunset = formatTime(data.sys.sunset);
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
           
            weatherResult.innerHTML = `
            <img src="${iconUrl}" alt="Weather Icon">
            <p><strong>${city}:</strong> ${temp}°F, ${weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)}</p>
            <p>High: ${high}°F, Low: ${low}°F</p>
            <p>Humidity: ${humidity}%</p>
            <p>Sunrise: ${sunrise}</p>  
            <p>Sunset: ${sunset}</p>

            `;
        
        })
            .catch(error =>{
                weatherResult.textContent = `Error: ${error.message}`;
                console.error(error);
                
                
                });
            }
function fetchForecastData(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`)
    .then(response => response.json())
    .then(data =>{
        const dailyForecast = {};

        data.list.forEach(item =>{
            const date = new Date(item.dt * 1000).toLocaleString("en-US", { weekday: "long"});
            if (!dailyForecast[date]){
                dailyForecast[date] = {
                    temp: Math.round(item.main.temp),
                    icon: item.weather[0].icon,
                    desc: item.weather[0].description
                };
            }
        });
        const forecastDays = Object.keys(dailyForecast).slice(0, 3);

        forecastResult.innerHTML = forecastDays.map(day =>{
            const forecast = dailyForecast[day];
            return `
            <div class="forcast-card">
            <h4>${day}</h4>
            <img src="https://openweathermap.org/img/wn/${forecast.icon}@2x.png" alt="Weather Icon">
            <p class="temperature">${forecast.temp}°F</p>
            <p>${forecast.desc.charAt(0).toUpperCase() + forecast.desc.slice(1)}</p>
            </div>
            `;
        }).join("");
    })
    .catch(error =>{
        forecastResult.textContent = `Error: ${error.message}`;
        console.error(error);
    });


}
             
fetchWeatherData();
fetchForecastData();