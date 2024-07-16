import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox.jsx";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 84,
        feelsLike : 25.05,
        weather :"haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };


    return(
        <div style={{width: '750px', textAlign: 'center'}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}