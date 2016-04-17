 var React = require('react');
 var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var InformationDisplay = React.createClass({

	componentDidMount() {
		console.log("mounted");
	},

	render: function () {
		{console.log(this.props.currentView)}
		if (this.props.currentView==="ABOUT") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
			  				<p>Hi, my name is Harry Dykins and i'm a junior front-end developer looking for work</p>
			  				<hr />
			  				<p>I recently graduated from a 12-week intensive front-end coding course at The Iron Yard and have since had the experience of working on a contract as an intern at Lyst</p>
			  				<hr />
			  				<p>I graduated from the University of Birmingham with a Mechanical Engineering degree (2:1), and am pursuing a career in front-end development</p>
			  				<hr />
			  				<p>I am currently working to expand my portfolio and gain understanding of further developement skills</p>
		  				</div>
		  			</ReactCSSTransitionGroup>
		  		</div>
			);
 		} else if (this.props.currentView==="PROJECTS") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
							Sabadoon
			  			</div>
			  		</ReactCSSTransitionGroup>
		  		</div>
			);
 		} else if (this.props.currentView==="INTERESTS") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
							Sabadoon Sabadoon
			  			</div>
			  		</ReactCSSTransitionGroup>
		  		</div>
			);
 		} else if (this.props.currentView==="BONUS") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
							Sabadoon Sabadoon Sabadoon
			  			</div>
			  		</ReactCSSTransitionGroup>
		  		</div>
			);
 		}
	}
});

module.exports = InformationDisplay;