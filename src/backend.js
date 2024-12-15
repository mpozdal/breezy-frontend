import axios from 'axios';

const deafultError = (code, text) => {
	return new Error(`HTTP error! status: ${code}, message: ${text}`);
};

export const fetchCoords = async (placeId) => {
	try {
		const response = await axios.get('/api/city/coords', {
			params: { input: placeId },
		});
		if (response.status !== 200) {
			throw deafultError(response.status, response.statusText);
		}
		return response;
	} catch (err) {
		throw new Error(
			err.message || 'Something went wrong while fetching data'
		);
	}
};

export const fetchCity = async (input) => {
	try {
		const response = await axios.get('/api/city', {
			params: { input: input },
		});
		if (response.status !== 200) {
			throw deafultError(response.status, response.statusText);
		}
		return response;
	} catch (err) {
		throw new Error(
			err.message || 'Something went wrong while fetching data'
		);
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
			if (response.status !== 200) {
				throw deafultError(response.status, response.statusText);
			}
			return response;
		} catch (err) {
			throw new Error(
				err.message || 'Something went wrong while fetching data'
			);
		}
	} else {
		throw new Error('Something went wrong while fetching data');
	}
};
export const fetchWeeklyInfo = async (location) => {
	const latitude = location?.lat;
	const longitude = location?.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/weather/weeklyInfo', {
				params: { latitude, longitude },
			});

			if (response.status !== 200) {
				throw deafultError(response.status, response.statusText);
			}
			return response;
		} catch (err) {
			throw new Error(
				err.message || 'Something went wrong while fetching data'
			);
		}
	} else {
		throw new Error('Something went wrong while fetching data');
	}
};
export const fetchCurrentInfo = async (location) => {
	const latitude = location?.lat;
	const longitude = location?.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/weather/current', {
				params: { latitude, longitude },
			});
			if (response.status !== 200) {
				throw deafultError(response.status, response.statusText);
			}
			return response;
		} catch (err) {
			throw new Error(
				err.message || 'Something went wrong while fetching data'
			);
		}
	} else {
		throw new Error('Something went wrong while fetching data');
	}
};

export const fetchCityName = async (location) => {
	const latitude = location?.lat;
	const longitude = location?.lng;
	if (latitude !== null && longitude !== null) {
		try {
			const response = await axios.get('/api/city/name', {
				params: { latitude, longitude },
			});
			if (response.status !== 200) {
				throw deafultError(response.status, response.statusText);
			}
			return response;
		} catch (err) {
			throw new Error(
				err.message || 'Something went wrong while fetching data'
			);
		}
	} else {
		throw new Error('Something went wrong while fetching data');
	}
};
