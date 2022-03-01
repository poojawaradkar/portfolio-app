import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00ab55'
    },
    secondary: {
      main: '#97BC62'
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontFamily: 'Raleway',
      fontSize: 16
    }
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 30,
          textTransform: 'none',
          minWidth: '200px',
          backgroundColor: 'rgb(0, 171, 85)',
          boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px'
        },
      },
    },
  },
});
