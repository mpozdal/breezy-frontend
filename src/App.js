import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CitiesPage from './pages/CitiesPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';

import { DarkModeProvider } from './contexts/DarkModeContext';
import { LocationProvider } from './contexts/LocationContext';
import { WeatherProvider } from './contexts/WeatherContext';
import { CitiesProvider } from './contexts/CitiesContext';
import { ErrorProvider } from './contexts/ErrorContext';

function App() {
	return (
		<ErrorProvider>
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
		</ErrorProvider>
	);
}

export default App;
