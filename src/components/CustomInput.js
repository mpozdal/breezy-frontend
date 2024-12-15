import { useState } from 'react';
import { useLocation } from '../contexts/LocationContext';
import { useCities } from '../contexts/CitiesContext';
import { fetchCoords, fetchCity, fetchCityName } from '../backend';
function CustomInput({ placeholder, fav }) {
	const { addFavCities } = useCities();
	const { setLocation, getLocation, handleSetLocation } = useLocation();
	const [input, setInput] = useState('');
	const [selectedCity, setSelectedCity] = useState(null);
	const [cities, setCities] = useState([]);

	const clearInput = () => {
		setInput('');
		setCities([]);
	};

	const handleSelectCity = async (item) => {
		setSelectedCity(item);
		try {
			const response = await fetchCoords(item);
			const location = {
				latitude: response.lat,
				longitude: response.lng,
			};
			handleSetLocation(location);
		} catch (error) {
			console.error('Błąd przy pobieraniu coords:', error);
		} finally {
			clearInput();
		}
	};
	const handleInputChange = async (e) => {
		const value = e.target.value;
		setInput(value);

		if (value) {
			try {
				const response = await fetchCity(value);
				setCities(response);
			} catch (error) {
				console.error('Błąd przy pobieraniu miast:', error);
			}
		} else {
			clearInput();
		}
	};
	const addFavCity = (item) => {
		const cityData = {
			placeId: item?.place_id,
			name: item?.description,
		};
		addFavCities(cityData);
		clearInput();
	};
	return (
		<div className="relative">
			<div className=" flex justify-center items-center bg-light-panels dark:bg-dark-panels border-light-text border-b-2">
				<input
					value={input}
					onChange={handleInputChange}
					type="text"
					className="focus:outline-none focus:ring-0 w-full bg-light-panels dark:bg-dark-panels text-light-text  rounded-none dark:text-dark-text p-4 "
					placeholder={placeholder}
				/>
				{!fav && (
					<button className="p-4" onClick={getLocation}>
						<i className="fa-solid fa-crosshairs  text-light-alt-text dark:text-dark-alt-text "></i>
					</button>
				)}
			</div>
			<div className="absolute top-100 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text w-full z-10">
				{cities.length > 0 &&
					cities.map((item) => (
						<button
							onClick={() => {
								fav ? addFavCity(item) : handleSelectCity(item);
							}}
							className="h-[50px] px-4 w-full flex items-center hover:bg-dark-background hover:dark:bg-light-background hover:text-dark-text hover:dark:text-light-text"
						>
							<div className=" ">{item.description}</div>
						</button>
					))}
			</div>
		</div>
	);
}

export default CustomInput;
