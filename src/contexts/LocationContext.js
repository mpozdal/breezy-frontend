import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchCoords } from '../backend';
export const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
	const [location, setLocation] = useState({
		lat: null,
		lng: null,
	});
	const [city, setCity] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getLocation();
	}, []);

	const handleSetLocationFromFav = (data) => {
		setLocation({
			lat: data.lat,
			lng: data.lng,
		});

		localStorage.setItem(
			'location',
			JSON.stringify({
				lat: data.lat,
				lng: data.lng,
			})
		);
	};

	const handleSetLocation = async (place_id) => {
		try {
			const response = await fetchCoords(place_id);
			console.log(response);
			const data = {
				lat: response.data.lat,
				lng: response.data.lng,
			};
			setLocation(data);
			localStorage.setItem('location', JSON.stringify(data));
		} catch (err) {
			setError(err);
		}
	};

	const getLocation = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});

					localStorage.setItem(
						'location',
						JSON.stringify({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						})
					);
				},
				(err) => {
					setError(err.message);
					setLocation({
						lat: 40.73061,
						lng: -73.935242,
					}); //default new york
				}
			);
		} else {
			setError('Geolocation is not supported by your browser.');
			setLocation({
				lat: 40.73061,
				lng: -73.935242,
			});
		}
	};

	return (
		<LocationContext.Provider
			value={{
				location,
				error,
				setLocation,
				city,
				setCity,
				getLocation,
				handleSetLocation,
				handleSetLocationFromFav,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};
