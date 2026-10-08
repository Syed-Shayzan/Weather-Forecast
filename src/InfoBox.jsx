import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NormalImg from "./assets/Normal_weather.avif";
import RainyImg from "./assets/Rainy_weather.avif";
import SunnyImg from "./assets/Sunny_weather.avif";
import ColdImg from "./assets/Cold_weather.avif";
import "./infoBox.css";

export default function InfoBox({info}){
    return (<div className="infoBox">
        <h2>{info.humidity > 80 ?
            <span>High chances of Showers Today</span> :
            (info.temp > 35 ? <span>The Sun's Blazing</span> :
            (info.temp < 15 ? <span>Its Too Cold</span> :
            <span>Weather's Clam and Steady Today</span>))}</h2>
        <div className="container">
            <Card className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="265"
                image={info.humidity > 80 ? RainyImg : (info.temp > 35 ? SunnyImg : (info.temp < 15 ? ColdImg : NormalImg))}
                alt="Weather img"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;
                    {info.humidity > 80 ? <ThunderstormIcon/>
                    : (info.temp > 35 ? <SunnyIcon/>
                    : (info.temp < 15 ? <AcUnitIcon/>
                    : <WbTwilightIcon/>))}
                    <hr></hr>
                </Typography>
                <Typography variant="body2" component={"span"} style={{textAlign: "start"}}>
                        <h1>{info.temp}&deg;C</h1>
                        <p><i>{info.weather} &nbsp;</i> Feels like &nbsp;{info.feelsLike}&deg;</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>
                        <span>Maximum Temp - {info.maxTemp}&deg;C</span> &nbsp; ~ &nbsp;
                        <span>Minimum Temp - {info.minTemp}&deg;C</span>
                        </p>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    </div>)
}