import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { useCities } from '../contexts/CitiesContext';
import { useLocation } from '../contexts/LocationContext';
import WeatherIcon from './WeatherIcon';

function Main() {
	const { currentWeather, city } = useWeather();
	const { location } = useLocation();
	const { addFavCities, favCities, removeFavCities } = useCities();
	const cityData = {
		lat: location?.lat,
		lng: location?.lng,
		city: city,
	};
	const checkFav = () => {
		const exists = favCities.some((city) => city.city === cityData.city);
		if (exists) {
			return <i className="fa-solid fa-star text-2xl "></i>;
		}
		return <i className="fa-regular fa-star text-2xl "></i>;
	};

	return (
		<div className="flex flex-row  w-full text-light-text dark:text-white relative">
			<div className="text-3xl w-2/3 font-bold  flex flex-col h-full   justify-around">
				<h3 className="flex items-center ">
					{city || 'Unkown city, Country'}
					{city && (
						<button
							className=" flex justify-start item-center p-4"
							onClick={() => {
								if (
									favCities.some(
										(city) => city.city === cityData.city
									)
								) {
									removeFavCities(cityData);
								} else addFavCities(cityData);
							}}
						>
							{checkFav()}
						</button>
					)}
				</h3>
				<div className="text-8xl font-bold ">
					{currentWeather?.current?.temperature_2m || 0}°
				</div>
			</div>
			<div className="text-4xl font-bold flex h-full  justify-center  items-center w-1/3">
				<WeatherIcon
					weatherCode={currentWeather?.current?.weather_code}
				/>
			</div>
		</div>
	);
}
export default Main;
