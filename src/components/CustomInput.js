import { useState } from 'react';
import axios from 'axios';
import { useLocation } from '../contexts/LocationContext';
function CustomInput({ placeholder }) {
	const { setLocation } = useLocation();
	const [input, setInput] = useState('');
	const [selectedCity, setSelectedCity] = useState(null);
	const [cities, setCities] = useState([]);
	const handleSelectCity = async (item) => {
		setSelectedCity(item.place_id);
		setInput('');
		setCities([]);
		try {
			const response = await axios.get('/api/city/coords', {
				params: { input: item.place_id },
			});
			console.log(response.data);
			setLocation(response.data);
		} catch (error) {
			console.error('Błąd przy pobieraniu koordow:', error);
		}
	};
	const handleInputChange = async (e) => {
		const value = e.target.value;
		setInput(value);
		if (input === '') setCities([]);
		if (value) {
			try {
				const response = await axios.get('/api/city', {
					params: { input: value },
				});
				console.log(response.data.predictions);
				setCities(response.data.predictions); // Zaktualizuj listę miast
			} catch (error) {
				console.error('Błąd przy pobieraniu miast:', error);
			}
		} else {
			setCities([]);
		}
	};
	return (
		<div className="relative">
			<input
				value={input}
				onChange={handleInputChange}
				type="text"
				class="focus:outline-none focus:ring-0 w-full bg-light-panels dark:bg-dark-panels text-light-text border-light-text border-b-2 rounded-none dark:text-dark-text p-4 "
				placeholder={placeholder}
			/>
			<div className="absolute top-100 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text w-full z-10">
				{cities.length > 0 &&
					cities.map((item) => (
						<button
							onClick={() => {
								handleSelectCity(item);
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
