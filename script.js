function getWeather() {

  const city = document.getElementById("city").value.trim();

  if(city === ""){
    alert("Enter city name");
    return;
  }

  const temp = Math.floor(Math.random() * 10) + 25;
  const humidity = Math.floor(Math.random() * 40) + 50;

  let weatherOptions = [
    "☀ Sunny",
    "☁ Cloudy",
    "🌧 Rainy",
    "🌤 Clear Sky"
  ];

  let weather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

  document.getElementById("card").style.display = "block";

  document.getElementById("cityName").innerText =
    "📍 " + city;

  document.getElementById("temp").innerText =
    "🌡 Temperature: " + temp + "°C";

  document.getElementById("humidity").innerText =
    "💧 Humidity: " + humidity + "%";

  document.getElementById("weather").innerText =
    "🌤 Weather: " + weather;

}
