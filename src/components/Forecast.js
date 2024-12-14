import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import WeatherIcon from './WeatherIcon';
function Forecast() {
	const { weatherData } = useWeather();
	return (
		<div
			className="bg-light-panels dark:bg-dark-panels text-light-text dark:text-white p-4 
		 row-span-3 mr-4 w-full h-full grid grid-rows-[10px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4"
		>
			<h3 className="text-lg font-medium ">7-DAY FORECAST</h3>
			{weatherData?.map((day, index) => (
				<div
					className=" b w-full grid grid-cols-[1fr_1fr_1fr_1fr] gap-4  justify-between items-center text-left"
					key={index}
				>
					<div className="text-sm font-medium text-left text-light-alt-text dark:text-dark-alt-text">
						{day?.time}
					</div>

					<div className="text-center w-full flex justify-center">
						<WeatherIcon weatherCode={day?.weathercode} />
					</div>

					<div className="text-xl text-left">
						{day?.temperature_2m_max} / {day?.temperature_2m_min}°
					</div>
					<div className="text-sm text-right">{day?.energy} kWh</div>
				</div>
			))}
		</div>
	);
}

export default Forecast;
