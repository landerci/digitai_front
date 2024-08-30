// src\styles\theme.js          
import '../assets/fonts/RobotoCondensed.ttf';

const theme = {
    colors: {
      primary: '#FFFFFF',
      background: '#FAFAFA',
      disabled: '#DFDFDF',
      white: '#FFFFFF',
      black: '#000000',
      lightGray: '#F0F0F0',
      gray: '#EFEFEF',
      darkGray: '#CCCCCC',
      blue: '#006699',      
      lightblue: '#ddeeff',
      orange: '#EC7C2C',
      red: '#666666',
      darkRed: '#666666',
      lightRed: '#ccc',
      warning: '#FAAD14',
      success: '#52C41A',
      error: '#D4380D',
      labels: {
        red: '#FF0000',
        orange: '#FF7700',
        yellow: '#FFCC13',
        green: '#008000',
        blue: '#1800FF'
      }
    },
    border: {
      radius: {
        small: '0.2rem',
        medium: '0.4rem',
        large: '0.8rem',
        default: '1rem',
        huge: '3.7rem',
      },
    },
    fonts: {
      family: {
        default: 'Roboto Condensed , sans-serif',
      },
      weight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      sizes: {
        default: '1.4rem',
        xxsmall: '0.8rem',
        xsmall: '1rem',
        small: '1.2rem',
        medium: '1.8rem',
        large: '2.0rem',
        xlarge: '2.4rem',
        xxlarge: '3.0rem',
        huge: '6.8rem',
      },
    },
  };
  
  export default theme;