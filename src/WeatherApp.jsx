import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Unnao",
    temp: 25.05,
    weather: "haze",
    feelsLike: 27.38,
    humidity: 8,
    tempMax: 28.99,
    tempMin: 28.99,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  weatherInfo.city;

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{}}>
        {
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city}
            {weatherInfo.humidity > 80 ? (
              <ThunderstormIcon />
            ) : weatherInfo.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
        }
        <Typography variant="caption" display="block" gutterBottom>
        <p>feels like = {weatherInfo.feelsLike}&deg;C</p>
      </Typography>
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
