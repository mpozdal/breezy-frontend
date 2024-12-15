import React from 'react';

const getWeatherIcon = (code) => {
	if (code === 0) return '/assets/sunny.png';
	if ([1, 2, 3].includes(code)) return '/assets/cloudy.png'; // Częściowe zachmurzenie
	if ([45, 48].includes(code)) return '/assets/fog.png'; // Mgła
	if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
		return '/assets/rain.png'; // Deszcz
	if ([71, 73, 75, 85, 86].includes(code)) return '/assets/snow.png'; // Śnieg
	if ([95, 96, 99].includes(code)) return '/assets/thunder.png'; // Burza
	return '/assets/sunny.png';
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
