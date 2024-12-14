import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Nav from '../components/Nav';

function MapPage() {
	const { darkMode } = useDarkMode();
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div class="flex h-screen bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />

				<div class="grid w-full grid-cols-[1fr] grid-rows-[50px_1fr] h-full gap-4 ml-4"></div>
			</div>
		</div>
	);
}

export default MapPage;
