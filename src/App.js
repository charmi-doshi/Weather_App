import './App.css';
import { useState,useEffect } from 'react';
import {REACT_APP_API_URL,REACT_APP_API_KEY} from './constants'
import axios from 'axios';

function App() {
  const[lat,setLat]   = useState([])
  const [long,setLong] = useState([]);
  const [data,setData] = useState();

  //get location
  useEffect(
    ()=>{
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        // console.log("Latitude is:",lat)
        // console.log("Longitutde is",long);
      });
      console.log("Latitude is:",lat)
      console.log("Longitutde is",long);
      getWeather()
    },[lat,long]);

     function getWeather(){
      const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {location: 'sunnyvale', format: 'json', u: 'f'},
        headers: {
          'X-RapidAPI-Key': 'cf41696e91mshc8bebe61255dfddp149195jsn8a631c83a7aa',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  return (
    <div className="App">
     Hello
    </div>
  );
}

export default App;
