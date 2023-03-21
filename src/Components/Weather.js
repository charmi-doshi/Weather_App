import React from 'react';
import pic from '../w.png'
import { Card } from 'semantic-ui-react'
import './styles.scss';

const Weather =({weatherData})=> {
   // let date = new Date();

    let temp = Math.floor(weatherData.main.temp - 273.15);
  
    return ( <>
        <div className='card'>
            <div className='card-image'>
                    <img src={pic}/>
            </div>
            <div className='card-content'>
                <div className='card-header'>Weekly Forecast</div>
                <div className='card-details'>
                <label className='cityName'>{weatherData.name}</label>
                <span className='temperature'>{temp}&deg;C</span>
                <label>Description:<span> {weatherData.weather[0].description}</span></label> 
                <label>Humidity:<span>&emsp;&nbsp;{weatherData.main.humidity}</span></label> 
                <label>Wind speed:<span>{weatherData.wind.speed}</span> </label>
              
                </div>
            </div>

        </div>
    </> );
}

export default Weather;