import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8joEk6WJP2cCh7yu74H_ZIl1q3Vd6EtePOvQKkUsf-Q&s";
  const COLD_URL =
    "https://media.istockphoto.com/id/494811470/photo/winter-background-snowy-landscape-with-warning-sign.jpg?s=1024x1024&w=is&k=20&c=ZtltTNI2x1YykYPq9ysBbe1daB5UysHEXz1d7gWKPYo=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 150 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent className="cardContent">
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}&deg;C</p>
              <p>Max-temp = {info.tempMax}&deg;C</p>
              <p>Min-temp = {info.tempMin}&deg;C</p>
              <p>
                The weather can be described as <i>`{info.weather}`</i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
