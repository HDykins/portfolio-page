import React, { useContext } from "react"
import cx from "classnames"
import ViewChanger from '../ViewChanger';

const handleGithubButton = () => window.open('https://github.com/HDykins','_blank');
const handleLinkedInButton = () => window.open('https://uk.linkedin.com/in/harry-dykins-4712b073','_blank');

const Header = () => {

  const headerClass = cx("row", "header")
  const buttonClass = cx("external-site-button")
  return (
    <div className={headerClass}>
      <ViewChanger/>
    	<div className="col-xs-6">
    		<div onClick={handleGithubButton} className={buttonClass}>
    			<i className="fab fa-github-square"></i>
    		</div>
    	</div>
    	<div className="col-xs-6">
	    	<div onClick={handleLinkedInButton} className={buttonClass}>
	    		<i className="fab fa-linkedin"></i>
	    	</div>
    	</div>
    </div>
  );
};

export default Header;
