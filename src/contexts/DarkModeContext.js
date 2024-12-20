import React, { createContext, useState, useEffect, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('darkMode') === 'true'
	);

	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode') === 'true';
		setDarkMode(savedMode);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem('darkMode', newMode);
			return newMode;
		});
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};
