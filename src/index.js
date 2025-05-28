function updateWeather(response) {
  let temperatureNow = document.querySelector("#temperature");
  let temperatureNow1 = response.data.temperature.current;
  console.log(temperatureNow1);
  
  temperatureNow.innerHTML = Math.round(temperatureNow1);

  let city = document.querySelector("#city-name");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "0a744841eo85af43btc634f9048290bb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
  console.log(apiUrl);
}

function handlesubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlesubmit);
searchCity("lisbon");
