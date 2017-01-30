const React = require('react');
const openWeatherMap = require('openWeatherMap');

const ErrorModal = require('ErrorModal');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

const Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function(location) {
		const that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			});
		}, function(e) {
			that.setState({
				errorMessage: e.message,
				isLoading: false
			});
		});
	},
	render: function() {
		const {isLoading, location, temp, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
