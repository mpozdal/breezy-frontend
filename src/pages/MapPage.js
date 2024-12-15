import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Nav from '../components/Nav';

function MapPage() {
	const { darkMode } = useDarkMode();
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div className="flex h-screen bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />

				<div className=" w-full  h-full gap-4 ml-4 ">mapa</div>
			</div>
		</div>
	);
}

export default MapPage;
