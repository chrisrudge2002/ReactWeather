const React = require('react');

const ErrorModal = React.createClass({
	propTypes: {
		message: React.PropTypes.string.isRequired,
		title: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			title: 'Error'
		};
	},
	componentDidMount: function() {
		const modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		const {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;
