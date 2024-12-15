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
	const CheckFav = () => {
		const exists = favCities.some((city) => city.city === cityData.city);
		if (exists) {
			return <i className="fa-solid fa-star text-2xl "></i>;
		}
		return <i className="fa-regular fa-star text-2xl "></i>;
	};

	return (
		<div className="order-1 md:order-2 flex flex-row  w-full text-light-text dark:text-white relative">
			<div className="text-xl md:text-3xl w-2/3 font-bold  flex flex-col h-full gap-5 md:gap-0  justify-around">
				<h3 className="flex items-start ">
					{city || 'Unkown city, Country'}
					{city && (
						<button
							className="flex justify-center absolute right-0 top-0 md:top-2"
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
							<CheckFav />
						</button>
					)}
				</h3>
				<div className="text-6xl md:text-8xl font-bold ">
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
