import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import WeatherIcon from './WeatherIcon';
function Forecast() {
	const { weatherData } = useWeather();
	return (
		<div
			className=" bg-light-panels dark:bg-dark-panels text-light-text dark:text-white p-4 
		 row-span-3  w-full h-full grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4"
		>
			<h3 className="text-lg font-medium ">7-DAY FORECAST</h3>
			{weatherData !== null &&
				weatherData?.map((day, index) => (
					<div
						className=" w-full grid grid-cols-[1fr_40px_2fr_1fr] gap-4  justify-between items-center text-left"
						key={index}
					>
						<div className="text-sm font-medium text-left  text-light-alt-text dark:text-dark-alt-text">
							{day?.time}
						</div>

						<div className="text-center w-full flex justify-left">
							<WeatherIcon weatherCode={day?.weathercode} />
						</div>

						<div className="text-xl text-center ">
							{day?.temperature_2m_max} /{day?.temperature_2m_min}
							°
						</div>
						<div className="text-sm text-right">
							{day?.energy} kWh
						</div>
					</div>
				))}
		</div>
	);
}

export default Forecast;
