import React, { createContext, useState, useEffect, useContext } from 'react';

const CitiesContext = createContext();

export const useCities = () => useContext(CitiesContext);

export const CitiesProvider = ({ children }) => {
	const [favCities, setFavCities] = useState(() => {
		const savedItems = localStorage.getItem('cities');
		return savedItems ? JSON.parse(savedItems) : [];
	});

	const addFavCities = (item) => {
		const exists = favCities.some((city) => city.city === item.city);
		if (!exists) {
			const updatedItems = [...favCities, item];
			setFavCities(updatedItems);
			updateLocalStorage(updatedItems);
		}
	};
	const refreshCities = () => {
		setFavCities(() => {
			const savedItems = localStorage.getItem('cities');
			return savedItems ? JSON.parse(savedItems) : [];
		});
	};
	const removeFavCities = (item) => {
		const temp = favCities;
		const updatedCities = temp.filter((city) => city.city !== item.city);

		updateLocalStorage(updatedCities);
		setFavCities(updatedCities);

		refreshCities();
	};

	const updateLocalStorage = (item) => {
		localStorage.setItem('cities', JSON.stringify(item));
	};

	return (
		<CitiesContext.Provider
			value={{ favCities, addFavCities, removeFavCities }}
		>
			{children}
		</CitiesContext.Provider>
	);
};
