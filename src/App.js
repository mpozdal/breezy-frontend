import { DarkModeProvider } from './contexts/DarkModeContext';
import CitiesPage from './pages/CitiesPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<DarkModeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cities" element={<CitiesPage />} />
					<Route path="/map" element={<HomePage />} />
					<Route path="*" element={<HomePage />} />
				</Routes>
			</Router>
		</DarkModeProvider>
	);
}

export default App;
