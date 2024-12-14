import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
function Forecast() {
	const { weatherData } = useWeather();
	console.log(weatherData);
	return (
		<div
			className="bg-light-panels dark:bg-dark-panels text-light-text dark:text-white p-4 
		 row-span-3 mr-4 w-full h-full grid grid-rows-[10px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4"
		>
			<h3 className="text-lg font-medium ">7-DAY FORECAST</h3>
			{weatherData?.map((day, index) => (
				<div
					className=" b w-full grid grid-cols-[1fr_15px_1fr_1fr] gap-4  justify-between items-center text-left"
					key={index}
				>
					<div className="text-md font-medium text-left text-light-alt-text dark:text-dark-alt-text">
						{day?.time}
					</div>
					{/* <i className="fa-solid fa-sun text-3xl"></i> */}
					<div className="text-center">{day?.weathercode}</div>

					<div className="text-2xl text-right">
						{day?.temperature_2m_max}/{day?.temperature_2m_min}°
					</div>
					<div className="text-sm text-right">{day?.energy} kWh</div>
				</div>
			))}
		</div>
	);
}

export default Forecast;
