import { useDarkMode } from '../contexts/DarkModeContext';
import { useWeather } from '../contexts/WeatherContext';
import Nav from '../components/Nav';
import Forecast from '../components/Forecast';
import Main from '../components/Main';
import ExtraInfo from '../components/ExtraInfo';
import CustomInput from '../components/CustomInput';
import { ThreeDot } from 'react-loading-indicators';
function HomePage() {
	const { darkMode } = useDarkMode();
	const { isLoading } = useWeather();

	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div className="flex h-screen bg-light-background dark:bg-dark-background text-white p-4">
				<Nav />

				{isLoading ? (
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
					<div className="grid w-full grid-cols-[2fr_1fr] grid-rows-[50px_2fr_1fr] h-full gap-4 ml-4">
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
