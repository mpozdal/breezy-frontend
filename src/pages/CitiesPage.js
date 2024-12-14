import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Nav from '../components/Nav';
import CustomInput from '../components/CustomInput';
import CityItem from '../components/CityItem';
import { useCities } from '../contexts/CitiesContext';
import EmptyList from '../components/EmptyList';
function CitiesPage() {
	const { favCities } = useCities();
	const { darkMode } = useDarkMode();
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div class="flex h-screen bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />

				<div class="grid w-full grid-cols-[1fr] grid-rows-[50px_1fr] h-full gap-4 ml-4">
					<CustomInput placeholder="Search for cities" />

					<div className="overflow-y-auto flex flex-col gap-4 custom-scrollbar mt-2">
						{favCities?.length > 0 ? (
							favCities?.map((city) => <CityItem data={city} />)
						) : (
							<EmptyList />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CitiesPage;
