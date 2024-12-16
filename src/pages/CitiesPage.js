import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Nav from '../components/Nav';
import CityItem from '../components/CityItem';
import { useCities } from '../contexts/CitiesContext';
import EmptyList from '../components/EmptyList';
function CitiesPage() {
	const { favCities } = useCities();
	const { darkMode } = useDarkMode();
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div className="flex h-[100dvh] bg-light-background dark:bg-dark-background text-white p-2 md:p-4 ">
				<Nav />

				<div className=" w-full h-full gap-2 ml-2 md:gap-4 md:ml-4 ">
					<div className="overflow-auto h-full  custom-scrollbar ">
						{favCities?.length > 0 ? (
							favCities?.map((city, index) => (
								<CityItem data={city} key={index} />
							))
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
