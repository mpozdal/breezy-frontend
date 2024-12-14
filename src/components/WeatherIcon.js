import React from 'react';

const getWeatherIcon = (code) => {
	if (code === 0) return 'https://openweathermap.org/img/wn/01d.png';
	if ([1, 2, 3].includes(code))
		return 'https://openweathermap.org/img/wn/02d.png'; // Częściowe zachmurzenie
	if ([45, 48].includes(code))
		return 'https://openweathermap.org/img/wn/50d.png'; // Mgła
	if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
		return 'https://openweathermap.org/img/wn/10d.png'; // Deszcz
	if ([71, 73, 75, 85, 86].includes(code))
		return 'https://openweathermap.org/img/wn/13d.png'; // Śnieg
	if ([95, 96, 99].includes(code))
		return 'https://openweathermap.org/img/wn/11d.png'; // Burza
	return 'https://openweathermap.org/img/wn/01d.png';
};

const WeatherIcon = ({ weatherCode }) => {
	const iconPath = getWeatherIcon(weatherCode);
	return (
		<div>
			<img src={iconPath} alt={weatherCode} className="" />
		</div>
	);
};

export default WeatherIcon;
