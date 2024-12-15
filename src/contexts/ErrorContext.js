import React, { createContext, useState, useEffect, useContext } from 'react';

export const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isGettingLocation, setIsGettingLocation] = useState(false);

	return (
		<ErrorContext.Provider
			value={{
				error,
				setError,
				setIsLoading,
				isLoading,
				isGettingLocation,
				setIsGettingLocation,
			}}
		>
			{children}
		</ErrorContext.Provider>
	);
};
