import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from './LocationContext';
import { useError } from '../contexts/ErrorContext';
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
	const { location } = useLocation();
	const { setError } = useError();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (location?.lng && location?.lat) {
			try {
				fetchWeatherData();
				fetchWeeklyWeather();
				fetchCurrentWeather();
				fetchCity();
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}
	}, [location]);

	const fetchWeatherData = async () => {
		if (location.lat !== null && location.lng !== null) {
			try {
				const response = await fetchWeatherForecast(location);
				setWeatherData(response.data);
			} catch (err) {
				setError(err);
			}
		}
	};
	const fetchWeeklyWeather = async () => {
		if (location.lat !== null && location.lng !== null) {
			try {
				const response = await fetchWeeklyInfo(location);
				setWeeklyInfo(response.data);
			} catch (err) {
				setError(err);
			}
		}
	};
	const fetchCurrentWeather = async () => {
		if (location.lat !== null && location.lng !== null) {
			try {
				const response = await fetchCurrentInfo(location);
				setCurrentWeather(response.data);
			} catch (err) {
				setError(err);
			}
		}
	};

	const fetchCity = async () => {
		if (location.lat !== null && location.lng !== null) {
			try {
				const response = await fetchCityName(location);
				const code = response.data.plus_code.compound_code;
				const result = code.replace(/^[^\s]+\s/, '');
				setCity(result);
			} catch (err) {
				setError(err);
			}
		}
	};

	return (
		<WeatherContext.Provider
			value={{
				weatherData,
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
