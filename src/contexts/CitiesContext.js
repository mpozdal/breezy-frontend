import React, { createContext, useState, useEffect, useContext } from 'react';

const CitiesContext = createContext();

export const useCities = () => useContext(CitiesContext);

export const CitiesProvider = ({ children }) => {
	const [favCities, setFavCities] = useState(() => {
		const savedItems = localStorage.getItem('cities');
		return savedItems ? JSON.parse(savedItems) : [];
	});
	useEffect(() => {}, [favCities]);

	const addFavCities = (item) => {
		if (!favCities.includes(item)) {
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
		const idx = temp.indexOf(item);
		if (idx > -1) {
			temp.splice(idx, 1);
			updateLocalStorage(temp);
			setFavCities(temp);
		}
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
