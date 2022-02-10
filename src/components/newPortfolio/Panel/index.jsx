import React, { useContext } from 'react';
import cx from "classnames";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ViewContext } from "../../viewContext";

import sharedStyles from '../../sharedStyles';

const useStyles = makeStyles(theme => ({
  panelPadding: {
    padding: '2rem',
    margin: '0 1rem'
  },
  ...sharedStyles(theme)
}));

const Panel = ({ children }) => {
  const { panelPadding, darkPanel, papers } = useStyles(); 
  const theme = useContext(ViewContext);
  const isDarkTheme = theme.currentTheme==="dark"
  return (
    <Grid xs className={isDarkTheme ? cx(darkPanel, panelPadding) : cx(panelPadding, papers)}>
      {children}
    </Grid>
  );
}

export default Panel
