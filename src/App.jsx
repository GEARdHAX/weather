import {useEffect, useState} from "react";
import Weather from "./components/Weather";
import clear_day from "./assets/sunny.gif";
import clear_night from "./assets/01n.png";
import fewClouds_day from "./assets/02d.png";
import fewClouds_night from "./assets/02n.png";
import scatteredClouds from "./assets/03d.png";
import brokenClouds from "./assets/04d.png";
import showerRain from "./assets/09d.png";
import rain_day from "./assets/10d.png";
import rain_night from "./assets/10n.png";
import thunderstorm from "./assets/11d.png";
import snow from "./assets/13d.png";
import mist from "./assets/50d.png";
import blueSky from "./assets/blueSky.jpg";
import nightSky from "./assets/nightSky.jpg";

// Icon mapping
const weatherIcons = {
 "01d": clear_day,
 "01n": clear_night,
 "02d": fewClouds_day,
 "02n": fewClouds_night,
 "03d": scatteredClouds,
 "03n": scatteredClouds,
 "04d": brokenClouds,
 "04n": brokenClouds,
 "09d": showerRain,
 "09n": showerRain,
 "10d": rain_day,
 "10n": rain_night,
 "11d": thunderstorm,
 "11n": thunderstorm,
 "13d": snow,
 "13n": snow,
 "50d": mist,
 "50n": mist,
};

function App() {
 const [weatherData, setWeatherData] = useState({});
 const [bgImg, setbgImg] = useState(blueSky);
 const [color, setcolor] = useState("#000000");
 const search = async (city) => {
  console.clear()
  if (!city.trim()) {
   // Checks for empty or spaces-only input
   alert("Please enter a valid city name");
   return;
  }
  try {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=71c16ef8cd8643e199d96cf766e59e85`;
   const response = await fetch(url); // Fetch the weather data
   const data = await response.json(); // Parse the response JSON
   const iconKey = data.weather[0].icon;
   setcolor(iconKey.includes("n") ? "#FFFFFF" : "#000000");
   setbgImg(iconKey.includes("n") ? nightSky : blueSky);
   setWeatherData({
    temperature: Math.floor(data.main.temp),
    condition: data.weather[0].main,
    min_temp: data.main.temp_min,
    max_temp: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    location: data.name,
    country: data.sys.country,
    icon: weatherIcons[data.weather[0].icon], // Use the icon from your mapping
   });
  } catch (error) {
   alert("City Not Found");
   console.error("Error fetching weather data : City Not Found");
  }
 };

 return (
  <>
   <Weather
    weatherData={weatherData}
    onSearch={search}
    bgImg={bgImg}
    color={color}
   />
  </>
 );
}

export default App;
