import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { useWeather } from '../contexts/WeatherContext';
import WeatherIcon from './WeatherIcon';
import ErrorStatus from './ErrorStatus';
function Forecast() {
	const { weatherData } = useWeather();

	return (
		<div
			className="order-2 md:order-1 bg-light-panels dark:bg-dark-panels text-light-text dark:text-white 
			p-4  
		 	row-span-3  w-full h-full grid grid-rows-[30px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] md:grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] relative"
		>
			<div className="flex flex-row w-full justify-between items-center">
				<h3 className="text-lg font-medium ">7-DAY FORECAST</h3>
			</div>
			{weatherData !== null ? (
				weatherData?.map((day, index) => (
					<div
						className=" h-[120px] md:h-full w-full grid grid-cols-[2fr_1fr] grid-rows-3 md:grid-rows-1 md:grid-cols-[1fr_40px_2fr_1fr] md:gap-4 justify-between items-center text-left"
						key={index}
					>
						<div className="text-sm font-medium text-left  text-light-alt-text dark:text-dark-alt-text">
							{day?.time}
						</div>

						<div className="row-span-3 md:row-span-1 text-center  w-full flex justify-left">
							<WeatherIcon weatherCode={day?.weathercode} />
						</div>

						<div className="text-2xl md:text-xl text-left md:text-center ">
							{day?.temperature_2m_max}° /{' '}
							{day?.temperature_2m_min}°
						</div>
						<div className="text-sm text-left md:text-right ">
							<a
								data-tooltip-id="my-tooltip"
								data-tooltip-content="Estimated value of generated energy in kWh"
							>
								{day?.energy} kWh
							</a>
							<Tooltip id="my-tooltip" />
						</div>
					</div>
				))
			) : (
				<div className="row-span-7 flex-col flex justify-center items-center">
					<i className="fa-solid fa-triangle-exclamation text-8xl"></i>
					Problem with fetching data
				</div>
			)}
			<ErrorStatus />
		</div>
	);
}

export default Forecast;
