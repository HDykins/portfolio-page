import React, { useContext } from 'react';
import cx from "classnames";
import { Grid, Divider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ViewContext } from "../../viewContext";

import sharedStyles from '../../sharedStyles';

const useStyles = makeStyles(theme => ({
  sideItem: {
    maxHeight: "20px",
    padding: "2rem",
    margin: "0 1rem"
  },
  sideNav: {
    padding: "2rem 0",
    height: "fit-content"
  },
  ...sharedStyles(theme)
}));

const SideNav = () => {
  const theme = useContext(ViewContext);
  const isDarkTheme = theme.currentTheme==="dark"
  const { divider, sideItem, sideNav, shadow, darkPanel, lightText, papers } = useStyles(); 
  return (
    <Grid container xs={3} className={isDarkTheme ? cx(sideNav, darkPanel) : cx(sideNav, shadow, papers)} item direction="column" alignItems="start">
      <Grid xs component={Link} href="#about" className={isDarkTheme ? cx(sideItem, darkPanel) : cx(sideItem, lightText, papers)}><span>About me</span></Grid>
      <Divider className={divider}/>
      <Grid xs component={Link} href="#experience" className={isDarkTheme ? cx(sideItem, darkPanel) : cx(sideItem, lightText, papers)}><span>Experience</span></Grid>
      <Divider className={divider}/>
      <Grid xs component={Link} href="#stack" className={isDarkTheme ? cx(sideItem, darkPanel) : cx(sideItem, lightText, papers)}><span>Stack</span></Grid>
      <Divider className={divider}/>
      <Grid xs component={Link} href="#interests" className={isDarkTheme ? cx(sideItem, darkPanel) : cx(sideItem, lightText, papers)}><span>Interests</span></Grid>
      <Divider className={divider}/>
      <Grid xs component={Link} href="#showoff" className={isDarkTheme ? cx(sideItem, darkPanel) : cx(sideItem, lightText, papers)}><span>Showoff</span></Grid>
      <Divider className={divider}/>
      <Grid xs component={Link} href="#footer" className={isDarkTheme ? cx(sideItem, darkPanel) : cx(sideItem, lightText, papers)}><span>Links</span></Grid>
    </Grid>
  );
}

export default SideNav
