import React, { useContext } from 'react';
import cx from "classnames";
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ViewContext } from "../../viewContext";
import ViewChanger from '../../ViewChanger';

import sharedStyles from '../../sharedStyles';

const useStyles = makeStyles(theme => ({
  ...sharedStyles(theme),
  navbar: {
    zIndex: 100,
    top: 0,
    padding: 0,
    height: '5rem'
  },
  sticky: {
    position: 'sticky'
  }
}));

const SideNav = () => {
  const theme = useContext(ViewContext);
  const isDarkTheme = theme.currentTheme==="dark"
  const { navbar, sticky, darkText, lightText, darkPanel, papers } = useStyles();

  return (
    <Grid container item className={isDarkTheme ? cx(navbar, darkPanel, sticky) : cx(papers, navbar, sticky)}>
      <Grid container item xs={2} align='center' alignItems='center' justify='center'>
        <ViewChanger/>
      </Grid>
      <Grid container item xs align='center' alignItems='center'>
        <Grid item xs component={Link} href='#about' className={`${isDarkTheme ? darkText : lightText}`}>About me</Grid>
        <Grid item xs component={Link} href='#experience' className={`${isDarkTheme ? darkText : lightText}`}>Experience</Grid>
        <Grid item xs component={Link} href='#stack' className={`${isDarkTheme ? darkText : lightText}`}>Stack</Grid>
        <Grid item xs component={Link} href='#interests' className={`${isDarkTheme ? darkText : lightText}`}>Interests</Grid>
        <Grid item xs component={Link} href='#showoff' className={`${isDarkTheme ? darkText : lightText}`}>Showoff</Grid>
        <Grid item xs component={Link} href='#footer' className={`${isDarkTheme ? darkText : lightText}`}>Links</Grid>
      </Grid>
    </Grid>
  );
}

export default SideNav