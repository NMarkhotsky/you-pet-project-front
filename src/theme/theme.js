const fonts = {
  main: {
    regular: 'Manrope-Regular', // <== font-family //  400
    medium: 'Manrope-Medium', // <== font-family //  500
    semiBold: 'Manrope-SemiBold', // <== font-family //  600
    bold: 'Manrope-Bold', // <== font-family //  700
    extraBold: 'Manrope-ExtraBold', // <== font-family //  800
  },
  secondary: {
    regular: 'Inter-Regular', // <== font-family //  400
    medium: 'Inter-Medium', // <== font-family //  500
  },
};

const media = {
  phone: '(min-width: 320px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1280px)',
};

const boxShadow = {
  main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
  secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
};

const fontSizes = {
  xs: '12px', // font-size: 12px
  sm: '14px', // font-size: 14px
  md: '16px', // font-size: 16px
  ml: '18px', // font-size: 18px
  lg: '20px', // font-size: 20px
  xl: '24px', // font-size: 24px
  xxl: '28px', // font-size: 28px
  xxxl: '32px', // font-size: 32px
  big: '36px', // font-size: 36px
  huge: '48px', // font-size: 48px
  gigantic: '68px', // font-size: 68px
};

const transitionHover = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const lightTheme = {
  colors: {
    bgdColor: '#FEF9F9',
    bgdColorSecond: '#FEF9F9',
    bgdColorAuth: '#FFFFFF',
    bgdColorBurger: '#FEF9F9',
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111',
    blue: '#54ADFF',
    blueLight: '#CCE4FB',
    green: '#00C3AD',
    grey: '#888',
    red: '#F43F5E',
    blueGradient: 'linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)',
    logo: '#303030',
    text: '#000000',
    textBtn: '#FFFFFF',
    logInIconColor: '#FFFFFF',
  },
  media,
  fonts,
  boxShadow,
  fontSizes,
  transitionHover,
};

export const darkTheme = {
  colors: {
    bgdColor: '#111111',
    bgdColorSecond: '#888888',
    bgdColorAuth: '#8888887b',
    bgdColorBurger: '#111111',
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111',
    blue: '#54ADFF',
    blueLight: '#CCE4FB',
    green: '#00C3AD',
    grey: '#888',
    red: '#F43F5E',
    blueGradient: 'linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)',
    logo: '#FFFFFF',
    text: '#FFFFFF',
    textBtn: '#FFFFFF',
    logInIconColor: '#111111',
  },
  media,
  fonts,
  boxShadow,
  fontSizes,
  transitionHover,
};
