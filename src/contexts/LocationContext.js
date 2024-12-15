import React, { createContext, useState, useEffect, useContext } from 'react';

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

	const handleSetLocation = (location) => {
		setLocation({
			lat: location.latitude,
			lng: location.longitude,
		});
		localStorage.setItem(
			'location',
			JSON.stringify({
				lat: location.latitude,
				lng: location.longitude,
			})
		);
	};

	const getLocation = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
					handleSetLocation(position.coords);
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
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};
