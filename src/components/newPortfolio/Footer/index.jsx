import React, { useContext } from 'react';
import cx from "classnames";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ViewContext } from "../../viewContext";
import ViewChanger from '../../ViewChanger';

import sharedStyles from '../../sharedStyles';

const handleGithubButton = () => window.open('https://github.com/HDykins','_blank');
const handleGithubSiteButton = () => window.open('https://github.com/HDykins/portfolio-page','_blank');
const handleLinkedInButton = () => window.open('https://uk.linkedin.com/in/harry-dykins-4712b073','_blank');

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '2rem',
    margin: '0 1rem'
  },
  footerIcon: {
    padding: '0 1.5rem',
    cursor: 'pointer'
  },  
  ...sharedStyles(theme)
}));

const Footer = () => {
  const theme = useContext(ViewContext);
  const isDarkTheme = theme.currentTheme==="dark"
  const { footer, footerIcon, shadow, darkPanel, papers } = useStyles();

  return (
    <Grid item xs container alignItems='center' justifyContent='center' className={isDarkTheme ? cx(footer, darkPanel) : cx(footer, shadow, papers)}>
      <span id='footer'></span>
      <span>Find me on</span>
      <div onClick={handleLinkedInButton}><i className={'fab fa-4x fa-linkedin ' + footerIcon}></i></div>
      <div onClick={handleGithubButton}><i className={'fab fa-4x fa-github-square ' + footerIcon}></i></div>
      <span>Check out the code for this site here</span>
      <div onClick={handleGithubSiteButton}><i color='#ebc500' className={'fab fa-4x fa-github-square ' + footerIcon}></i></div>
    </Grid>
  );
}

export default Footer
