const API_KEY = 'e31cab28095bf0c2872ec01241d7d7f6'



const defaultWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => defaultDisplay(data))
}
defaultWeather();

const defaultDisplay = (city) => {
    const url = (`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`)
    const wIcon = document.getElementById('w-icon');
    wIcon.setAttribute('src', url);
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
    <h1 class="d-inline-block">${city.name}</h1>
    <span> (${city.sys.country})</span>
    <h5>${city.weather[0].main}</h5>
    <h5>${city.main.temp}&deg;C</h5>
    <p>Feels Like ${city.main.feels_like}&deg;C</p>
    <p>Min Temp Today: ${city.main.temp_min}&deg;C</p>
    <p>Max Temp Today: ${city.main.temp_max}&deg;C</p>
    <p>Wind pressure: ${city.wind.speed} Km/h</p>
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
    console.log(cityData);

    const url = (`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`)
    const wIcon = document.getElementById('w-icon');
    wIcon.setAttribute('src', url);
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
    <h1 class="d-inline-block">${cityData.name}</h1>
    <span> (${cityData.sys.country})</span>
    <h5>${cityData.weather[0].main}</h5>
    <h5>${cityData.main.temp}&deg;C</h5>
    <p>Feels Like ${cityData.main.feels_like}&deg;C</p>
    <p>Min Temp Today: ${cityData.main.temp_min}&deg;C</p>
    <p>Max Temp Today: ${cityData.main.temp_max}&deg;C</p>
    <p>Wind pressure: ${cityData.wind.speed} Km/h</p>
    `
};
