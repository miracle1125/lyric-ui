import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import type { FC } from 'react';

const darkTheme = createTheme({
  spacing: 10,
  palette: {
    type: 'dark',
    primary: {
      dark: '#8d6dc8',
      light: '#cabae6',
      main: '#a58ad5',
      contrastText: '#fff'
    },
    secondary: {
      dark: '#424242',
      light: '##fafafa',
      main: '#9e9e9e',
    },
    background: {
      default: '#000000',
    },
    text: {
      disabled: '#616161',
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
    common: {
      white: '#ffffff',
    }
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontSize: '35px',
      fontWeight: 'normal',
      lineHeight: '49px',
    },
    h2: {
      fontSize: '33px',
      fontWeight: 'normal',
      lineHeight: '45px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 'normal',
      lineHeight: '30px',
    },
    h4: {
      fontSize: '21px',
      fontWeight: 'normal',
      lineHeight: '26px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 'normal',
      lineHeight: '25px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '21px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '21px',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
  },
});

export const Theme: FC = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
