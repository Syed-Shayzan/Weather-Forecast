import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";


export default function SearchBox({updateInfo}){
let [city, setCity] = useState("");
let [error, setError] = useState(false);
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;

let getWeatherInfo = async () => {
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        maxTemp: jsonResponse.main.temp_max,
        minTemp: jsonResponse.main.temp_min,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
    }
    setError(false);
    return result;
    } catch(err) {
        throw err;
    }
}

let handleChange = (event) => {
    setCity(event.target.value);
}

let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    } catch(err) {
        setError(true);
    }
}

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Search for location"
            variant="filled"  onChange={handleChange}
            value={city} required className="field"/>&nbsp;&nbsp;
            <Button variant="outlined" type="submit">Submit</Button>
            {error && <p style={{color: "red"}}>No such place Exists</p>}
            </form>
        </div>
    )
}