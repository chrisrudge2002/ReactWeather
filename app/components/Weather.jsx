const React = require('react');
const openWeatherMap = require('openWeatherMap');
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

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			});
		}, function(error) {
			that.setState({isLoading: false});
			console.log(error);
		});
	},
	render: function() {
		const {isLoading, location, temp} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
