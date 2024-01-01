const apiKey = "97b213ca8849617a5cbf5181ebe18603";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector("button");
const windSpeed = document.querySelector(".wind");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const weatherData = document.querySelector(".weather");
const error = document.querySelector(".error");
const imageSrc = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
  const res = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  if (res.status == 404) {
    error.style.display = "block";
    weatherData.style.display = "none";
  } else {
    const data = await res.json();

    city.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        imageSrc.src = `./image/clouds.png`;
        break;
      case "Rain":
        imageSrc.src = `./image/rain.png`;
        break;
      case "Clear":
        imageSrc.src = `./image/clear.png`;
        break;
      case "Drizzle":
        imageSrc.src = `./image/drizzle.png`;
        break;
      case "Mist":
        imageSrc.src = `./image/mist.png`;
        break;
      default:
        imageSrc.src = `./image/snow.png`;
    }
    weatherData.style.display = "block";
    error.style.display = "none";
  }
}
searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
