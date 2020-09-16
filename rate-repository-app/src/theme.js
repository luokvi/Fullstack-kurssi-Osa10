import Constants from 'expo-constants';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      link: 'white',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: 'System',
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#24292e",
      display: 'flex',
      flexDirection: 'row'
    },

    appbartab: {
      color: 'white',
      flexGrow: 1,
      fontWeight: '700',
      paddingRight: 10
    }
  };
  
  export default theme;