import { DarkModeProvider } from './contexts/DarkModeContext';
import CitiesPage from './pages/CitiesPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import { LocationProvider } from './contexts/LocationContext';
import { WeatherProvider } from './contexts/WeatherContext';
import { CitiesProvider } from './contexts/CitiesContext';

function App() {
	return (
		<LocationProvider>
			<WeatherProvider>
				<CitiesProvider>
					<DarkModeProvider>
						<Router>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route
									path="/cities"
									element={<CitiesPage />}
								/>
								<Route path="/map" element={<MapPage />} />
								<Route path="*" element={<HomePage />} />
							</Routes>
						</Router>
					</DarkModeProvider>
				</CitiesProvider>
			</WeatherProvider>
		</LocationProvider>
	);
}

export default App;
