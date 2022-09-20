const searchButton = document.getElementById("submit");
var currentDay = moment().format("MM/D/Y");

function getLatLon(cityName) {
  var latLon =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=5&cnt=24&appid=8aff7017aa429b9bc201a6c2e43c57c4";

  fetch(latLon)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.length == 0) {
        console.log(" not available");
        return;
      }
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      getWeather(lat, lon);
      fiveDays(lat,lon);
    });
}

function getWeather(lat, lon) {
  var weekWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt=24&appid=8aff7017aa429b9bc201a6c2e43c57c4&units=metric`;

  fetch(weekWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      todayWeather(data,buildImageSrcFromId(data));
    });
}

function buildImageSrcFromId(data){
    return `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}

function todayWeather(data,imageSrc) {
  today.innerHTML = "";
  var city = document.createElement("h3");
  var temp = document.createElement("p");
  var wind = document.createElement("p");
  var humidity = document.createElement("p");
  var weatherImage = document.createElement('img');
  weatherImage.src=imageSrc;
  city.textContent = data.name + " (" + currentDay + ")";
  temp.textContent = "Temp: " + data.main.temp + " °C";
  wind.textContent = "Wind: " + data.wind.speed * 10 + " km/h";
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
  today.append(city);
  today.append(weatherImage);
  today.append(temp);
  today.append(wind);
  today.append(humidity);
}

function fiveDays(lat ,lon){
                      
    var weekWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&appid=8aff7017aa429b9bc201a6c2e43c57c4&units=metric`;

    fetch(weekWeather)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}

function fiveDaysForcast(){

}

function execute() {
  var today = document.getElementById("today");
  var name = document.getElementById("Name").value;
  var cityName = name;
  getLatLon(cityName);
  
}
searchButton.addEventListener("click", execute);
