 var React = require('react');

var SideNav = React.createClass({

	render: function () {
	  return (
    	<div className="col-xs-4 left-section">
    		<div className="side-nav">
    			<div className="section">
    				<svg viewBox="0 0 800 600">
					  	<symbol id="s-text">
							<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
							About
							</text>
					    
					  	</symbol>
					  
						<g className="g-ants">
							<use xlinkHref="#s-text"
							  className="text-copy"></use>     
							<use xlinkHref="#s-text"
							  className="text-copy"></use>     
							<use xlinkHref="#s-text"
							  className="text-copy"></use>     
							<use xlinkHref="#s-text"
							  className="text-copy"></use>     
							<use xlinkHref="#s-text"
							  className="text-copy"></use>     
						</g>
					</svg>
    			</div>
    		</div>
    	</div>
	  );
	}
});

module.exports = SideNav;