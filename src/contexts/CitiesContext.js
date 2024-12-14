import React, { createContext, useState, useEffect, useContext } from 'react';

const CitiesContext = createContext();

export const useCities = () => useContext(CitiesContext);

export const CitiesProvider = ({ children }) => {
	const [favCities, setFavCities] = useState([]);

	useEffect(() => {
		const cities = JSON.parse(localStorage.getItem('cities'));
		console.log(JSON.parse(localStorage.getItem('cities')));
		if (cities?.length > 0) setFavCities(cities);
	});

	const addFavCities = (item) => {
		setFavCities((prevItems) => [...prevItems, item]);
		localStorage.setItem('cities', JSON.stringify(favCities));
	};
	const removeFavCities = (item) => {
		const idx = favCities.indexOf(item);
		if (idx > -1) {
			setFavCities((prevItems) => prevItems.splice(idx, 1));
		}
	};

	return (
		<CitiesContext.Provider
			value={{ favCities, addFavCities, removeFavCities }}
		>
			{children}
		</CitiesContext.Provider>
	);
};
