import React from 'react';
import { useCities } from '../contexts/CitiesContext';
import { useLocation } from '../contexts/LocationContext';
import { useNavigate } from 'react-router';
function CityItem({ data }) {
	const { removeFavCities } = useCities();
	const { handleSetLocationFromFav } = useLocation();
	let navigate = useNavigate();

	return (
		<div
			className="min-h-[100px] flex flex-row items-center justify-between bg-light-panels dark:bg-dark-panels text-light-text 
                cursor-pointer 
				border-b-[1px] border-b-dark-alt-text dark:border-b-dark-background
            dark:text-dark-text hover:transition-all p-4 hover:bg-dark-panels hover:dark:bg-light-panels hover:text-dark-text hover:dark:text-light-text"
		>
			<button
				className="w-full h-full text-start"
				onClick={() => {
					handleSetLocationFromFav(data);
					navigate('/');
				}}
			>
				<h3 className="text-xl md:text-3xl font-bold ">{data?.city}</h3>
			</button>
			<button
				onClick={() => {
					removeFavCities(data);
				}}
				className="w-[50px]"
			>
				<i className="fa-solid fa-trash text-xl"></i>
			</button>
		</div>
	);
}

export default CityItem;
