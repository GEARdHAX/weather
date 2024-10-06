import React, {useState} from "react";
import blueSky from "../assets/blueSky.jpg";
import nightSky from "../assets/nightSky.jpg";
import "./Weather.css";
const Weather = ({weatherData, onSearch, bgImg, color}) => {
 const [city, setCity] = useState("");
 const handleKeyDown = (event) => {
  if (event.key === "Enter") {
   onSearch(city);
  }
 };
 return (
  <>
   <img id="bgImg" src={bgImg} alt="" />
   <div className="container">
    <div className="box">
     <div className="searchBox">
      <input
       type="text"
       placeholder="Search Cities"
       value={city}
       onChange={(e) => setCity(e.target.value)}
       onKeyDown={handleKeyDown}
      />
      <i
       onClick={() => onSearch(city)}
       className="fa-solid fa-magnifying-glass"
      ></i>
     </div>
     <img className="iconImg" src={weatherData.icon} alt="" />
     <h1 style={{color: color}}>{weatherData.temperature}&deg;</h1>
     <h3 style={{color: color}}>{weatherData.condition}</h3>
     <p style={{color: color}}>
      {weatherData.location}, {weatherData.country}
     </p>
     <div style={{color: color}} className="details">
      <div id="humidity" className="sub-details">
       {/* <img src="" alt="" /> */}
       <span className="material-symbols-outlined">humidity_percentage</span>
       <b>
        <p>Humidity</p>
       </b>
       <p>{weatherData.humidity} % </p>
      </div>
      <div id="pressure" className="sub-details">
       {/* <img src="" alt="" /> */}
       <span className="material-symbols-outlined">blood_pressure</span>
       <b>
        <p>Pressure</p>
       </b>
       <p>{weatherData.pressure}</p>
      </div>
      <div id="min_temp" className="sub-details">
       <span className="material-symbols-outlined">thermometer_minus</span>
       {/* <img src="" alt="" /> */}
       <b>
        <p>Min. Temperature</p>
       </b>
       <p>{weatherData.min_temp}&deg;</p>
      </div>
      <div id="max_temp" className="sub-details">
       {/* <img src="" alt="" /> */}
       <span className="material-symbols-outlined">thermometer_gain</span>
       <b>
        <p>Max. Temperature</p>
       </b>
       <p>{weatherData.max_temp}&deg;</p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Weather;
