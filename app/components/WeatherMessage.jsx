const React = require('react');

const WeatherMessage = ({location, temp}) => {
	return (
		<h3 className="text-center">It's {temp} in {location}.</h3>
	);
};

module.exports = WeatherMessage;
