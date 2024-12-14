import React from 'react';
import { useCities } from '../contexts/CitiesContext';
function Main() {
	const { favCities, addFavCities } = useCities();

	return (
		<div className="flex flex-row  w-full text-light-text dark:text-white">
			<div className="text-5xl font-bold  flex flex-col h-full px-10  justify-around">
				Tarnow, PL
				<div className="text-8xl font-bold ">-2.2°</div>
			</div>
			<div className="text-4xl font-bold flex h-full  justify-center  items-center w-full relative">
				<i className="fa-solid fa-sun text-9xl"></i>
				<button
					onClick={() => {
						console.log('added');
						addFavCities('New York');
					}}
				>
					<i class="fa-regular fa-star text-2xl absolute top-0 right-0"></i>
				</button>
			</div>
		</div>
	);
}

export default Main;
