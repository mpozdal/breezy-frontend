import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from './LocationContext';
import axios from 'axios';
export const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);
	const { location } = useLocation();
	useEffect(() => {
		fetchWeatherData();
	}, [location]);
	const fetchWeatherData = async () => {
		const latitude = location.lat;
		const longitude = location.lng;
		if (location?.lat !== null && location?.lng !== null) {
			console.log(location);
			try {
				const response = await axios.get('/api/weather', {
					params: { latitude, longitude },
				});
				setWeatherData(response.data);
			} catch (err) {
				console.log('Error with fetch weather!' + err);
			}
		}
	};

	return (
		<WeatherContext.Provider value={{ weatherData, error }}>
			{children}
		</WeatherContext.Provider>
	);
};
