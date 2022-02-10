import React, { useContext } from "react"
import { ViewContext } from "../viewContext"
import cx from "classnames"

const SideNav = ({ setCurrentTheme }) => {
  const { currentTheme } = useContext(ViewContext);
  const sideNavClass = cx("side-nav", currentTheme);
  return (
  	<div className="col-xs-4 left-section">
  		<div className={sideNavClass}>
  			<div className="section">
  				<svg viewBox="0 0 1000 600">
				  	<symbol id="about-svg-symbol">
						<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
							 About
						</text>
				  	</symbol>
				  
					<g onClick={() => setCurrentView("ABOUT")} className="g-ants">
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
  				<svg viewBox="0 0 1000 600">
				  	<symbol id="projects-svg-symbol">
						<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
						    Projects
						</text>
				  	</symbol>
				  
					<g onClick={() => setCurrentView("PROJECTS")} className="g-ants">
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
  				<svg viewBox="0 0 1000 600">
				  	<symbol id="interests-svg-symbol">
						<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
  							Interests
						</text>
				  	</symbol>
				  
					<g onClick={() => setCurrentView("INTERESTS")} className="g-ants">
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
  			<div className="section">
  				<svg viewBox="0 0 800 600">
				  	<symbol id="bonus-svg-symbol">
						<text
							className="text-line"
							textAnchor="middle"
							x="50%"
							y="375px">
						   Bonus
						</text>
				  	</symbol>
				  
					<g onClick={() => setCurrentView("BONUS")} className="g-ants">
						<use xlinkHref="#bonus-svg-symbol"
						  className="text-copy"></use>     
						<use xlinkHref="#bonus-svg-symbol"
						  className="text-copy"></use>     
						<use xlinkHref="#bonus-svg-symbol"
						  className="text-copy"></use>     
						<use xlinkHref="#bonus-svg-symbol"
						  className="text-copy"></use>     
						<use xlinkHref="#bonus-svg-symbol"
						  className="text-copy"></use>     
					</g>
				</svg>
  			</div>
  		</div>
  	</div>
	);
};

export default SideNav;