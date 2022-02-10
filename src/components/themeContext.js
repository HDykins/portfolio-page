import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f3f3f3',
      dark: "#444"
    },
    secondary: {
      main: '#000',
      dark: '#fff'
    },
    tertiary: {
      main: '#ffeccc',
      dark: 'slategrey'
    }
  },
});

export default function Palette({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}