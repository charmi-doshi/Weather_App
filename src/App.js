import "./App.css";
import { useState, useEffect } from "react";
import {
  REACT_APP_API_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_HOST,
} from "./constants";
import axios from "axios";
import Weather from "./Components/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();

  //get location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("Latitude is:", lat);
    console.log("Longitutde is", long);
 //   getWeather();
  }, []);

  
  async function getWeather() {
    const options = {
      method: 'GET',
      url: 'https://weather-api63.p.rapidapi.com/v1/weather',
      params: {q: 'London'},
      headers: {
        'X-RapidAPI-Key': `${REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'weather-api63.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setData(response.data)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }
  
  return (
    <div className="App">
      {/* <Weather weatherData={data}/> */}
      { (typeof data) != "undefined" ? (
        <Weather weatherData={data} />
       
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
