import { createMuiTheme } from '@material-ui/core/styles';
import * as BUTTONS from './buttons';

// Colors
const cssBlack = '#1E1E1E';
const cssBorder = '#B5B5B5';
const cssGreen = '#34EB4C';
const cssLightGreen = '#6BEE7C';
const cssRed = '#E93F3F';
const cssWhite = '#F9F9F9';
const cssBlue = '#3F3FE9';
const cssErrorRed = '#E81111';

// Font
const fontRegular = 400;
const fontBold = 700;
const fontColor = '#E9E9E9';

const Theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        color: cssWhite,
      },
      underline: {
        '&::before': {
          borderColor: cssWhite,
        },
        '&:hover:not($disabled)::before': {
          borderColor: cssWhite,
        },
        '&::after': {
          borderColor: cssBlue,
        },
      },
    },
    MuiFilledInput: {
      root: {
        color: cssWhite,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      underline: {
        '&::before': {
          borderColor: cssWhite,
        },
        '&:hover::before': {
          borderWidth: '2px',
          borderColor: cssWhite,
        },
        '&::after': {
          borderColor: cssBlue,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        color: cssWhite,
        '&:hover $notchedOutline': {
          borderWidth: '2px',
          borderColor: cssWhite,
        },
      },
      notchedOutline: {
        borderColor: cssWhite,
      },
    },
    MuiInputLabel: {
      root: {
        color: cssWhite,
      },
      filled: {
        color: cssWhite,
      },
      outlined: {
        color: cssWhite,
      },
    },
    MuiButton: {
      root: BUTTONS.defaultBtn,
      contained: BUTTONS.contained,
      containedSecondary: BUTTONS.containedSecondary,
      containedSizeLarge: BUTTONS.defaultBtnLarge,
      outlined: BUTTONS.outlined,
      outlinedPrimary: BUTTONS.outlinedPrimary,
      outlinedSecondary: BUTTONS.outlinedSecondary,
      outlinedSizeLarge: BUTTONS.outlinedSizeLarge,
      text: BUTTONS.defaultBtn,
      textPrimary: BUTTONS.textBtnPrimary,
      textSecondary: BUTTONS.textBtnSecondary,
      textSizeLarge: BUTTONS.defaultBtnLarge,
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
  palette: {
    common: {
      black: cssBlack,
      border: cssBorder,
      green: cssGreen,
      white: cssWhite,
      red: cssRed,
      lightGreen: cssLightGreen,
      blue: cssBlue,
    },
    primary: {
      main: `${cssBlue}`,
    },
    secondary: {
      main: `${cssWhite}`,
    },
    error: {
      main: cssErrorRed,
    },
  },
  shape: {
    borderRadius: '10px',
  },
  typography: {
    fontFamily: 'Comic Sans MS',
    h1: {
      color: fontColor,
      fontSize: "2.25rem",
      fontWeight: `${fontBold}`,
    },
    h2: {
      color: fontColor,
      fontSize: "1.75rem",
      fontWeight: `${fontBold}`,
    },
    h3: {
      color: fontColor,
      fontSize: "1.25rem",
      fontWeight: `${fontBold}`,
    },
    h4: {
      color: fontColor,
      fontSize: "1.125rem",
      fontWeight: `${fontBold}`,
    },
    body1: {
      color: fontColor,
      fontSize: "1.25rem",
      fontWeight: `${fontRegular}`,
    },
    body2: {
      color: fontColor,
      fontSize: "1rem",
      fontWeight: `${fontRegular}`,
    },
  },
});

export default Theme;
