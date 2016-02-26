 var React = require('react');

var SideNav = React.createClass({

	render: function () {
	  return (
    	<div className="col-xs-4 left-section">
    		<div className="side-nav">
    			<div className="section">
    				<svg viewBox="0 0 800 600">
					  	<symbol id="about-svg-symbol">
							<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
							About
							</text>
					    
					  	</symbol>
					  
						<g className="g-ants">
							<use xlinkHref="#about-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#about-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#about-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#about-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#about-svg-symbol"
							  className="text-copy"></use>     
						</g>
					</svg>
    			</div>
    			<div className="section">
    				<svg viewBox="0 0 800 600">
					  	<symbol id="projects-svg-symbol">
							<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
							Projects
							</text>
					    
					  	</symbol>
					  
						<g className="g-ants">
							<use xlinkHref="#projects-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#projects-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#projects-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#projects-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#projects-svg-symbol"
							  className="text-copy"></use>     
						</g>
					</svg>
    			</div>
    			<div className="section">
    				<svg viewBox="0 0 800 600">
					  	<symbol id="interests-svg-symbol">
							<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
							Interests
							</text>
					    
					  	</symbol>
					  
						<g className="g-ants">
							<use xlinkHref="#interests-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#interests-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#interests-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#interests-svg-symbol"
							  className="text-copy"></use>     
							<use xlinkHref="#interests-svg-symbol"
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