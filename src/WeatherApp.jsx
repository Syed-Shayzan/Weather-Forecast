import {useState} from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.0,
        humidity: 35,
        maxTemp: 25.78,
        minTemp: 24.08,
        feelsLike: 27,
        weather: "Clear sky",
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (<div>
        <h1 style={{textAlign : "center"}}>Weather Forecast</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>)
}