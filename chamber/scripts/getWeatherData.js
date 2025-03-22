const apikey = "321f7fb15cfb08901851aa77bcefa5bb";
const city = "Leogane";
const weatherResult = document.getElementById("weatherResult");

function formatTime(timestamp){
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-Us", {
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
            const high = Math.round(data.main.tem_max);
            const low = Math.round(data.main.temp_min);
            const humidity = data.main.humidity;
            const weatherDesc =data.weather[0].descriptuon;
            const sunrise = formatTime(data.sys.sunset);
            const sunset = formatTime(data.sys.sunrise);

            weatherResult.innerHTML = `
            <p>${city}: ${temp}F, ${weatherDesc.chartAt(0).toUpperCase() + weatherDesc.slice(1)}</p>
            <p>High: ${high}F, Low: ${low} $F</p>
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
             
            fetchWeatherData();