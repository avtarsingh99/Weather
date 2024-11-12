const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eb995256b95a412f876152224241211",
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
  cityName.innerHTML = city;
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=eb995256b95a412f876152224241211&q=" + city + "&days=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // Use appropriate response data structure
      const current = response.current;
      cloud_pct.innerHTML = current.cloud;
      temp.innerHTML = current.temp_c;
      feels_like.innerHTML = current.feelslike_c;
      min_temp.innerHTML = response.forecast.forecastday[0].day.mintemp_c;
      max_temp.innerHTML = response.forecast.forecastday[0].day.maxtemp_c;
      humidity.innerHTML = current.humidity;
      wind_speed.innerHTML = current.wind_kph;
      wind_degrees.innerHTML = current.wind_degree;
      sunrise.innerHTML = formatTime(response.location.localtime_epoch + 6 * 3600); // Placeholder
      sunset.innerHTML = formatTime(response.location.localtime_epoch + 18 * 3600); // Placeholder
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");




