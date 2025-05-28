
function updateWeather(response) {
    let  temperatureNow=document.querySelector("#temperature")
    let temperatureNow1=Math.round(response.data.temperature.current);
    temperatureNow.innerHTML=temperatureNow1;
    console.log(temperatureNow);
    let city=document.querySelector("#city-name");
    city.innerHTML=response.data.city;
    
    
}


function searchCity(city){
    let apiKey="0a744841eo85af43btc634f9048290bb";
    // let city="New york"
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather)
    console.log(apiUrl)
}





function handlesubmit(event) {
    event.preventDefault();
let searchInput=document.querySelector("#search-input")
let city=document.querySelector("#city-name");
   
    searchCity(searchInput.value);
    
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handlesubmit)