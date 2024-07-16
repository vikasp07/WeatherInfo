import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1572687413790-9d96634041b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1609547638914-9e67da2a48aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGQlMjBzZWFzb24lMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 355 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 30
                  ? HOT_URL
                  : COLD_URL
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 30 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>feels like = {info.feelsLike}&deg;C</p>
                <p>
                  The weather is <i>{info.weather}</i>
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              className="github"
              style={{ color: "black" }}
              href="https://github.com/vikasp07"
            >
              GITHUB <i class="fab fa-github"></i>
            </a>
            <a
              className="linked"
              href="https://www.linkedin.com/in/vikasmpawar/"
            >
              Linked <i class="fa-brands fa-linkedin"></i>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
