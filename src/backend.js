import axios from 'axios';

export const fetchCoords = async (item) => {
	try {
		const response = await axios.get('/api/city/coords', {
			params: { input: item?.place_id },
		});
		if (response.status !== 200) {
			throw new Error(response);
		}
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchCity = async (input) => {
	try {
		const response = await axios.get('/api/city', {
			params: { input: input },
		});
		if (response.status !== 200) {
			throw new Error(response);
		}
		return response?.data?.predictions;
	} catch (error) {
		throw error;
	}
};
export const fetchWeatherForecast = async (location) => {
	const latitude = location.lat;
	const longitude = location.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/weather', {
				params: { latitude, longitude },
			});

			return response.data;
		} catch (err) {
			console.log('Error with fetch weather!' + err);
		}
	}
};
export const fetchWeeklyInfo = async (location) => {
	const latitude = location.lat;
	const longitude = location.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/weather/weeklyInfo', {
				params: { latitude, longitude },
			});

			return response.data;
		} catch (err) {
			console.log('Error with fetch weekly info!' + err);
		}
	}
};
export const fetchCurrentInfo = async (location) => {
	const latitude = location.lat;
	const longitude = location.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/weather/current', {
				params: { latitude, longitude },
			});
			return response.data;
		} catch (err) {
			console.log('Error with fetch current info!' + err);
		}
	}
};

export const fetchCityName = async (location) => {
	const latitude = location.lat;
	const longitude = location.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/city/name', {
				params: { latitude, longitude },
			});
			return response.data;
		} catch (err) {
			console.log('Error with fetch city name!' + err);
		}
	}
};
