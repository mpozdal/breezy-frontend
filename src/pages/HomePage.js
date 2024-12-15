import { useDarkMode } from '../contexts/DarkModeContext';
import { useError } from '../contexts/ErrorContext';
import Nav from '../components/Nav';
import Forecast from '../components/Forecast';
import Main from '../components/Main';
import ExtraInfo from '../components/ExtraInfo';
import CustomInput from '../components/CustomInput';
import { ThreeDot } from 'react-loading-indicators';
function HomePage() {
	const { darkMode } = useDarkMode();
	const { isLoading, isGettingLocation } = useError();

	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div className="flex h-[100dvh] bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />

				{isLoading || isGettingLocation ? (
					<div className="grid w-full grid-cols-1 grid-rows-[50px_1fr] h-full gap-4 ml-4">
						<CustomInput placeholder="Search for cities" />
						<div className="flex justify-center items-center text-8xl">
							<ThreeDot
								color={!darkMode ? '#0b131e' : '#F8FAFC'}
								size="large"
							/>
						</div>
					</div>
				) : (
					<div className="overflow-y-auto grid w-full grid-cols-1 md:grid-cols-[3fr_4fr] md:grid-rows-[50px_1fr_1fr] h-full gap-4 ml-4">
						<CustomInput placeholder="Search for cities" />
						<Forecast />

						<Main />
						<ExtraInfo />
					</div>
				)}
			</div>
		</div>
	);
}

export default HomePage;
