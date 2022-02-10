var React = require('react');

var Header = React.createClass({

	handleGithubButton: function () {
		window.open('https://github.com/HDykins','_blank')
	},

	handleLinkedInButton: function () {
		window.open('https://uk.linkedin.com/in/harry-dykins-4712b073','_blank')
	},

	render: function () {
	  return (
	    <div className="row header">
	    	<div className="col-xs-6">
	    		<div onClick={this.handleGithubButton} className="external-site-button">
	    			<i className="fa fa-github-square"></i>
	    		</div>
	    	</div>
	    	<div className="col-xs-6">
		    	<div onClick={this.handleLinkedInButton} className="external-site-button">
		    		<i className="fa fa-linkedin-square"></i>
		    	</div>
	    	</div>
	    </div>
	  );
	}
});

module.exports = Header;

