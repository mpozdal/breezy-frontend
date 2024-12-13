import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Nav from '../components/Nav';
import Forecast from '../components/Forecast';
import Main from '../components/Main';
import ExtraInfo from '../components/ExtraInfo';
import CustomInput from '../components/CustomInput';
function HomePage() {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div class="flex h-screen bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />

				<div class="grid w-full grid-cols-[60%_40%] grid-rows-[10%_1fr_30%] h-full gap-4 ml-4">
					<CustomInput placeholder="Search for cities" />
					<Forecast />
					<Main />
					<ExtraInfo />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
