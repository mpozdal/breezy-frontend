import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchCoords } from '../backend';
import { useError } from './ErrorContext';
export const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
	const { isGettingLocation, setIsGettingLocation } = useError();
	const [location, setLocation] = useState({
		lat: null,
		lng: null,
	});
	const [city, setCity] = useState(null);
	const { setError, error } = useError();

	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('location'))) {
			getLocation();
		} else {
			const data = JSON.parse(localStorage.getItem('location'));
			setLocation({
				lat: data.lat,
				lng: data.lng,
			});
		}
	}, []);

	const handleSetLocationFromFav = (data) => {
		setIsGettingLocation(true);
		try {
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
		} catch (err) {
		} finally {
			setTimeout(() => {
				setIsGettingLocation(false);
			}, 300);
		}
	};

	const handleSetLocation = async (place_id) => {
		setIsGettingLocation(true);
		try {
			const response = await fetchCoords(place_id);
			const data = {
				lat: response.data.lat,
				lng: response.data.lng,
			};
			setLocation(data);
			localStorage.setItem('location', JSON.stringify(data));
		} catch (err) {
			setError(err);
		} finally {
			setTimeout(() => {
				setIsGettingLocation(false);
			}, 300);
		}
	};

	const getLocation = () => {
		setIsGettingLocation(true);
		try {
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
						err.code !== 1 && setError(err);
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
		} catch (err) {
			setError(err);
		} finally {
			setTimeout(() => {
				setIsGettingLocation(false);
			}, 300);
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
