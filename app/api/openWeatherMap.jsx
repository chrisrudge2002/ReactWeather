const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=099c762985141ae20b18e108bb2e9481&units=metric';

module.exports = {
	getTemp: function(location) {
		const requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(location)}`;

		return axios.get(requestURL).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
};
