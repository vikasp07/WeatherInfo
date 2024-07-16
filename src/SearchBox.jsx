import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { TextField } from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6816c57726ba4678cd4564e5123fa3a3";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city.charAt(0).toUpperCase() + city.slice(1),
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo();
      console.log(city);
      setCity("");
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
      setCity("");
      updateInfo();
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button variant="contained" type="submit">
          SEARCH
        </button>
        {error && <p style={{ color: "red" }}>No Such Place Exist In API!!</p>}
      </form>
    </div>
  );
}
// /* <label htmlFor="validationCustom01" class="form-label">City</label>
// <input type="text"
//     class="form-control"
//     id="city"
//     value={city}
//     label="City Name"
//     onChange={handleChange}
//     variant="outlined"
//     required>
// </input>

// // <TextField
// //     id="city"
// //     label="City Name"
// //     variant="outlined"
// //     required
// //     value={city}
// //     onChange={handleChange}
// // />
