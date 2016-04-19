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
			  				<p>Hi, my name is Harry Dykins and i'm a junior front-end developer looking for work in London</p>
			  				<hr />
			  				<p>I recently graduated from a 12-week intensive front-end coding course at <a href="https://www.theironyard.com/" target="_blank" className="links">The Iron Yard</a> and have since had the experience of working on a contract as an intern at <a href="https://www.lyst.co.uk" target="_blank" className="links">Lyst</a></p>
			  				<hr />
			  				<p>I graduated from the University of Birmingham with a Mechanical Engineering degree (2:1), and am pursuing a career in front-end development</p>
			  				<hr />
			  				<p>I am currently working to expand my portfolio and gain understanding of further development skills</p>
		  				</div>
		  			</ReactCSSTransitionGroup>
		  		</div>
			);
 		} else if (this.props.currentView==="PROJECTS") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
							<h1>A christmas tree ordering website <a href="http://hdykins.github.io/final-project/" target="_blank"><i className="fa fa-github-square"></i></a></h1>
							<p>A wesbite that allows users to order a christmas tree, its decorations and extra services. The user can also preview decorations, choose delivery method and date, and review their order</p>
							<p>Tech: React.js, Flux, jQuery, Node.js, MongoDB, Bootstrap, Browserify, Gulp, Sass, moment.js, Google Maps and more APIs</p>
							<hr />
							<h1>A calendar/event planner <a href="http://hdykins.github.io/Calendar-jQuery-MVC/" target="_blank"><i className="fa fa-github-square"></i></a></h1>
							<p>A calendar that allows the user to plan for events and add location, and review events for that month. The user can add text mark the location of that event on a map by entering a postcode, and then filter events based on a date range</p>
							<p>Tech: jQuery, MVC, Bootstrap, Sass, moment.js, Google Maps and more APIs</p>
							<hr />
							<h1>My old profile page <a href="http://hdykins.github.io/Profile-page/" target="_blank"><i className="fa fa-github-square"></i></a></h1>
							<p>A profile page I created in the early weeks of my course. In making this I learned a lot about styling and media queries</p>
							<p>Tech: HTML, Javascript, Bootstrap and CSS</p>
							<hr />
							<h1>A photo viewer <a href="http://hdykins.github.io/Misc-code/" target="_blank"><i className="fa fa-github-square"></i></a></h1>
							<p>A simple photo viewer I created in the early weeks of my course. My first application created using Javascript.</p>
							<p>Tech: HTML, Javascript and CSS</p>
							<hr />
							<h1>A metro newspaper page <a href="http://hdykins.github.io/Bootstrap-Metro-page/" target="_blank"><i className="fa fa-github-square"></i></a></h1>
							<p>A static newspaper page recreated using HTML, CSS and Bootstrap. Collaborated with another student to share the workload, first introduction to HTML, CSS, Bootstrap and Git and creating a responsive page</p>
							<p>Tech: HTML, Bootstrap and CSS</p>
							<hr />
							<h1>Currently working on - MapBox drone tracking visual representation</h1>
							<p>A An application that show the path of a series of drones based on their co-ordinates and timestamp. More to come.</p>
							<p>Tech: Mapbox, jQuery, more TBD</p>
							<hr />
			  			</div>
			  		</ReactCSSTransitionGroup>
		  		</div>
			);
 		} else if (this.props.currentView==="INTERESTS") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
		  					<i className="fa interests-icon fa-gamepad"></i>
							<h1>Gaming</h1>
							<p>I enjoy playing games in my free time, mostly PC but also console games. I enjoy pretty much all types, but especially FPS and RPG games and play CS:GO fairly regularly and dedicatedly. At the moment i'm currently sinking hours into Fallout 4 and HL2 mod called Synergy (pretty much HL2 story co-op)</p>
							<p>SteamID: jedikins PS Tag: Goose-god</p>	
							<hr />
							<i className="fa interests-icon fa-futbol-o"></i>
							<h1>Sport</h1>
							<p>As with games, I like watching almost all sports, particularly football, rugby and formula 1. I also play tennis in my spare time casually, and enjoy watching eSports. I appreciate the competetive nature and skill involved in sport which I think is mirrored in professional gaming teams</p>
							<p>Fav teams: Spurs, Virtus.pro</p>	
							<hr />
			  			</div>
			  		</ReactCSSTransitionGroup>
		  		</div>
			);
 		} else if (this.props.currentView==="BONUS") {
		  	return (
		  		<div className="col-xs-8 right-section">
			  		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			  			<div className="information-display" key={this.props.currentView}>
							<h1>This is my face</h1>
							<img style={{width: 50 + "%"}} src="./build/images/myface.jpg" />
							<hr />
							<iframe style={{width: 100 + "%"}} src="https://www.youtube.com/watch?v=2GtwpEYkDQg"></iframe>
			  			</div>
			  		</ReactCSSTransitionGroup>
		  		</div>
			);
 		}
	}
});

module.exports = InformationDisplay;