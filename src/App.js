import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import addNotification from "react-push-notification";
import './App.css';
// import logo from './images/logo.jpg'

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const clickToNotify = (w) => {
        addNotification({
            title: w?.name ?? "Hello",
            subtitle: w?.sys?.country ?? "Viet Nam",
            theme: "darkblue",
            message: `${Math.round(w?.main?.temp ?? 30)} °C`,
            duration: 4000,
            icon: './images/logo.jpg',
            native: true,
        });
    };

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <button onClick={() => clickToNotify(weather)} style={{ position: 'static' }}>notify</button>
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;