//API Key:  8aff7017aa429b9bc201a6c2e43c57c4
var weekWeather =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8aff7017aa429b9bc201a6c2e43c57c4";

function getWeather(weekWeather) {
  fetch(weekWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getWeather(weekWeather);