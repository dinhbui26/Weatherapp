import React from 'react';
import './style.css';
import {Button} from 'semantic-ui-react';
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const CardExampleCard = ({weatherData}) => (
    <div className="main">

        <div className="top">
            <p className="header">City Name: {weatherData.name}</p>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>

        <div className="flex">
            <p className="day">Day: {moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className="description">Description: {weatherData.weather[0].main}</p>
        </div>

        <div className="flex">
            <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            <p className='temp'>Feels Like:{weatherData.main.feels_like} &deg;C</p>
        </div>

        <div className="flex">
            <p className="sun">Sunrise:  {new Date((weatherData.sys.sunrise + weatherData.timezone -10800)*1000).toLocaleTimeString("en-IN")}</p>
            <p className="sun">Sunset: {new Date((weatherData.sys.sunset + weatherData.timezone -10800)*1000).toLocaleTimeString("en-IN")}</p>
            <p className="wind">Wind Speed: {weatherData.wind.speed}</p>
        </div>

    </div>
)

export default CardExampleCard;