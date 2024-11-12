const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eb995256b95a412f876152224241211",
    // "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
     "X-RapidAPI-Host": "http://api.weatherapi.com/v1",
  },
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};


const getWeather = (city) => {
    cityName.innerHTML = city
  fetch( 
"https://api.weatherapi.com/v1/current.json?key=eb995256b95a412f876152224241211&q=" + city + "&aqi=no", 
    // "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
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
      sunrise.innerHTML = formatTime(response.sunrise);
      sunset.innerHTML = formatTime(response.sunset);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click" ,(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")



