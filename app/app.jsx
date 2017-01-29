const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const About = require('About');
const Examples = require('Examples');
const Main = require('Main');
const Weather = require('Weather');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute components={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
