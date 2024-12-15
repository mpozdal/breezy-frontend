import { DarkModeProvider } from './contexts/DarkModeContext';
import CitiesPage from './pages/CitiesPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import { LocationProvider } from './contexts/LocationContext';
import { WeatherProvider } from './contexts/WeatherContext';
import { CitiesProvider } from './contexts/CitiesContext';
import { ErrorProvider } from './contexts/ErrorContext';
import ErrorStatus from './components/ErrorStatus';

function App() {
	return (
		<ErrorProvider>
			<LocationProvider>
				<WeatherProvider>
					<CitiesProvider>
						<DarkModeProvider>
							<Router>
								<ErrorStatus />
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
