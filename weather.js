const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "10beaac4f5mshc9a98bef96e56d2p1dea56jsndd18523c4d00",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
    cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click" ,(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

function london(){
  getWeather("London");
};
function dubai(){
  getWeather("Dubai");
};
function lA(){
  getWeather("Los Angeles");
};

const k = document.getElementById("kol").value;
console.log(k)
const getWeather2 = (city) => {
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pct2.innerHTML = response.cloud_pct2;
    temp2.innerHTML = response.temp2;
    feels_like2.innerHTML = response.feels_like2;
    humidity2.innerHTML = response.humidity2;
    min_temp2.innerHTML = response.min_temp2;
    max_temp2.innerHTML = response.max_temp2;
    wind_speed2.innerHTML = response.wind_speed2;
    wind_degrees2.innerHTML = response.wind_degrees2;
    sunrise2.innerHTML = new Date(response.sunrise2 * 1000);
    sunset2.innerHTML = response.sunset2;
  })
  .catch((err) => console.error(err));
};
