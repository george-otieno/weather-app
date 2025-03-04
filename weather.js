const apiKey = "577f8e385f14233d4e63bc94a0cad85d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Nairobi";

async function checkWeather(){

 const response = await fetch(apiUrl + `&appid=${apiKey}`);

 var data = await response.json();

 console.log(data);

}

 checkWeather();
