import React, { createContext, useState, useEffect, useContext } from 'react';

export const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
	const [location, setLocation] = useState({ lat: null, lng: null });
	const [error, setError] = useState(null);

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(err) => {
					setError(err.message);
				}
			);
		} else {
			setError('Geolocation is not supported by your browser.');
		}
	}, []);

	return (
		<LocationContext.Provider value={{ location, error, setLocation }}>
			{children}
		</LocationContext.Provider>
	);
};
