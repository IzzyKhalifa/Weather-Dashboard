// var temp = document.getElementById('temp');
// var wind = document.getElementById('wind');
// var humidity = document.getElementById('humidity');
var currentDay = moment().format("MM/D/Y");

function getWeather() {
  var weekWeather =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8aff7017aa429b9bc201a6c2e43c57c4&units=metric";

  fetch(weekWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      todayWeather(data);
    });
}

function todayWeather(data) {
  var city = document.createElement("h3");
  var temp = document.createElement("p");
  var wind = document.createElement("p");
  var humidity = document.createElement("p");
  city.textContent = data.name+' ('+currentDay+')';
  temp.textContent ='Temp: '+ data.main.temp+ ' °C';
  wind.textContent ='Wind: '+ data.wind.speed*10 + ' km/h';
  humidity.textContent ='Humidity: '+ data.main.humidity+ '%';
  console.log(data.main.temp);
  today.append(city);
  today.append(temp);
  today.append(wind);
  today.append(humidity);
}

document.addEventListener("DOMContentLoaded", function () {
  var today = document.getElementById("today");
  getWeather();
});
