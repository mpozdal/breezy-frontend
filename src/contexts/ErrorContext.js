import React, { createContext, useState, useEffect, useContext } from 'react';

export const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState(null);

	return (
		<ErrorContext.Provider
			value={{
				error,
				setError,
			}}
		>
			{children}
		</ErrorContext.Provider>
	);
};
