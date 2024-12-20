import { useState, useRef, useEffect } from 'react';
import { useLocation } from '../contexts/LocationContext';
import { useCities } from '../contexts/CitiesContext';
import { useError } from '../contexts/ErrorContext';
import { fetchCity } from '../backend';
function CustomInput({ placeholder, fav }) {
	const { addFavCities } = useCities();
	const { getLocation, handleSetLocation } = useLocation();
	const { setError } = useError();
	const [input, setInput] = useState('');
	const [cities, setCities] = useState([]);
	const [open, setOpen] = useState(false);
	const inputRef = useRef(null);
	const dropdownRef = useRef(null);

	const clearInput = () => {
		setInput('');
		setCities([]);
	};

	const handleSelectCity = async (item) => {
		clearInput();
		await handleSetLocation(item.place_id);
	};
	const handleInputChange = async (e) => {
		const value = e.target.value;
		setInput(value);

		if (value) {
			try {
				const response = await fetchCity(value);
				setCities(response.data.predictions);
			} catch (error) {
				setError(error);
			}
		} else {
			clearInput();
		}
	};
	const addFavCity = (item) => {
		addFavCities(item);
		clearInput();
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				inputRef.current &&
				!inputRef.current.contains(event.target) &&
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className="order-0 md:col-span-1 relative ">
			<div className=" flex justify-center items-center bg-light-panels dark:bg-dark-panels border-light-text border-b-2">
				<input
					value={input}
					onChange={handleInputChange}
					type="text"
					className="focus:outline-none focus:ring-0 w-full bg-light-panels dark:bg-dark-panels text-light-text  rounded-none dark:text-dark-text p-4 "
					placeholder={placeholder}
					onFocus={() => setOpen(true)}
					ref={inputRef}
				/>
				{!fav && (
					<button
						className="p-4 hover:text-light-text hover:dark:text-dark-text text-light-alt-text dark:text-dark-alt-text"
						onClick={() => {
							getLocation();
							clearInput();
						}}
					>
						<i className="fa-solid fa-crosshairs text-2xl"></i>
					</button>
				)}
			</div>
			<div
				ref={dropdownRef}
				className="absolute top-100 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text w-full z-10"
			>
				{cities.length > 0 &&
					open &&
					cities?.map((item) => (
						<button
							onClick={() => {
								fav ? addFavCity(item) : handleSelectCity(item);
							}}
							className="h-[50px] px-4 w-full flex items-center hover:bg-dark-background hover:dark:bg-light-background hover:text-dark-text hover:dark:text-light-text"
						>
							<div className=" text-left">{item.description}</div>
						</button>
					))}
			</div>
		</div>
	);
}

export default CustomInput;
