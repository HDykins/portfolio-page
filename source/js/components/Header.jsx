var React = require('react');

var Header = React.createClass({

	render: function () {
	  return (
	    <div className="row header">
	    	<div className="col-xs-6">
	    		<div className="external-site-button">
	    			<i className="fa fa-github-square"></i>
	    		</div>
	    	</div>
	    	<div className="col-xs-6">
		    	<div className="external-site-button">
		    		<i className="fa fa-linkedin-square"></i>
		    	</div>
	    	</div>
	    </div>
	  );
	}
});

module.exports = Header;

