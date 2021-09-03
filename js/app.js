const API_KEY = 'e31cab28095bf0c2872ec01241d7d7f6'



const defaultWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => defaultDisplay(data))
}
defaultWeather();

const defaultDisplay = (cityData) => {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
    <h1>${cityData.name}</h1>
    <h5>${cityData.weather[0].main}</h5>
    <h5>${cityData.main.temp}&deg;C</h5>
    <p>Feels Like ${cityData.main.feels_like}&deg;C</p>
    <p>Min Temp Today: ${cityData.main.temp_min}&deg;C</p>
    <p>Max Temp Today: ${cityData.main.temp_max}&deg;C</p>
    <p>Wind pressure: ${cityData.wind.speed} Km/h</p>
    `
};



const loadWeather = () => {
    const locationInput = document.getElementById('location-input');
    const location = locationInput.value;
    locationInput.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => displayWeather(data))
};

const displayWeather = (cityData) => {
    // console.log(cityData);
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
    <h1>${cityData.name}</h1>
    <h5>${cityData.weather[0].main}</h5>
    <h5>${cityData.main.temp}&deg;C</h5>
    <p>Feels Like ${cityData.main.feels_like}&deg;C</p>
    <p>Min Temp Today: ${cityData.main.temp_min}&deg;C</p>
    <p>Max Temp Today: ${cityData.main.temp_max}&deg;C</p>
    <p>Wind pressure: ${cityData.wind.speed} Km/h</p>
    `
};
