const apiKey = '0c46f1d13fe215706dee96d1fd5f900b';
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

document.getElementById('forecast-button').addEventListener('click', () => {
  const location = document.getElementById('location-input').value;
  fetchWeatherData(location)
    .then(data => updateWeatherUI(data));
});

function fetchWeatherData(location) {
  const url = `${baseUrl}?q=${location}&appid=${apiKey}&units=metric`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
}

function updateWeatherUI(data) {
  const temperature = data.main.temp_max;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  document.getElementById('temperature').textContent = temperature + '°C';
  document.getElementById('description').textContent = description;
  document.getElementById('humidity').textContent = `${humidity}%`;
  document.getElementById('weather-icon').src = iconUrl;

  const weatherInfo = document.querySelector('.weather-info');
  weatherInfo.classList.add('fade-in');
  weatherInfo.style.display = 'block';
}
