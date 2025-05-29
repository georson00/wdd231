// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat49.74=&long=6.63&units=metric&appid=c9c324dfcea4b30b26680edf568f2c8a';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else{
            throw Error(await response.text());
        }
        
    }catch (error){
        console.log(error);
    }
}
apiFetch();