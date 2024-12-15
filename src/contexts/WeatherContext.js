import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from './LocationContext';
import {
	fetchWeeklyInfo,
	fetchWeatherForecast,
	fetchCurrentInfo,
	fetchCityName,
} from '../backend';
export const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
	const [weatherData, setWeatherData] = useState(null);
	const [weeklyInfo, setWeeklyInfo] = useState(null);
	const [city, setCity] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [error, setError] = useState(null);
	const { location } = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (location?.lng && location?.lat) {
			try {
				fetchWeatherData();
				fetchWeeklyWeather();
				fetchCurrentWeather();
				fetchCity();
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}
	}, [location]);

	const fetchWeatherData = async () => {
		const latitude = location.lat;
		const longitude = location.lng;
		if (latitude !== null && longitude !== null) {
			try {
				const response = await fetchWeatherForecast(location);
				setWeatherData(response);
			} catch (err) {
				console.log('Error with fetch weather!' + err);
			}
		}
	};
	const fetchWeeklyWeather = async () => {
		const { latitude, longitude } = location;
		if (latitude !== null && longitude !== null) {
			try {
				const response = await fetchWeeklyInfo(location);
				setWeeklyInfo(response);
			} catch (err) {
				console.log('Error with fetch weather!' + err);
			}
		}
	};
	const fetchCurrentWeather = async () => {
		const latitude = location.lat;
		const longitude = location.lng;
		if (latitude !== null && longitude !== null) {
			try {
				const response = await fetchCurrentInfo(location);
				setCurrentWeather(response);
			} catch (err) {
				console.log('Error with fetch weather!' + err);
			}
		}
	};

	const fetchCity = async () => {
		const latitude = location.lat;
		const longitude = location.lng;
		if (latitude !== null && longitude !== null) {
			try {
				const response = await fetchCityName(location);
				const code = response?.plus_code?.compound_code;
				const result = code.replace(/^[^\s]+\s/, '');
				setCity(result);
			} catch (err) {
				console.log('Error with fetch weather!' + err);
			}
		}
	};

	return (
		<WeatherContext.Provider
			value={{
				weatherData,
				error,
				weeklyInfo,
				currentWeather,
				city,
				isLoading,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
