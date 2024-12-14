import { useEffect, useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useLocation } from '../contexts/LocationContext';
import Nav from '../components/Nav';
import Forecast from '../components/Forecast';
import Main from '../components/Main';
import ExtraInfo from '../components/ExtraInfo';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import { useWeather } from '../contexts/WeatherContext';
function HomePage() {
	const { darkMode } = useDarkMode();
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div class="flex h-screen bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />
				<div class="grid w-full grid-cols-[60%_40%] grid-rows-[50px_1fr_30%] h-full gap-4 ml-4">
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
