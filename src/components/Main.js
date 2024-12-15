import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { useCities } from '../contexts/CitiesContext';
import WeatherIcon from './WeatherIcon';
function Main() {
	const { currentWeather, city } = useWeather();
	const { addFavCities, favCities, removeFavCities } = useCities();
	const location = JSON.parse(localStorage.getItem('location'));
	const cityData = {
		lat: location?.lat,
		lng: location?.lng,
		city: city,
	};
	const checkFav = () => {
		const exists = favCities.some((city) => city.city === cityData.city);
		if (exists) {
			return <i class="fa-solid fa-star text-2xl "></i>;
		}
		return <i class="fa-regular fa-star text-2xl "></i>;
	};

	return (
		<div className="flex flex-row  w-full text-light-text dark:text-white relative">
			<div className="text-3xl w-2/3 font-bold  flex flex-col h-full   justify-around">
				<h3 className="flex items-center ">
					{city}
					<button
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
						&nbsp; {checkFav()}
					</button>
				</h3>
				<div className="text-8xl font-bold ">
					{currentWeather?.current?.temperature_2m}°
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
