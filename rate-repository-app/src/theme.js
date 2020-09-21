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
    },

    body: {
      backgroundColor: '#666',
      height: '100%'
    },

    //RepositoryItems

    FlexColumn: {
      display: 'flex',
      flexDirection: 'column'
    },

    FlexRow: {
      display: 'flex',
      flexDirection: 'row',
    },

    Counter: {
      flexGrow: 1,
      alignItems: 'center'
    },

    Item: {
      flexGrow: 1
    },

    LanguageText: {
      color: 'white',
      padding: 5,
      textAlign: 'center'
    },

    LanguageLabel : {
      backgroundColor: '#0366d6',
      width: '50%',
      borderRadius: 50,
    },

    RepositoryItemCard: {
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },

    CountersContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },

    //Sign In Form
    FormContainer: {
      width: '100%',
      height: 150,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },

    formInput: {
      color: '#24292e',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#24292e',

      flexGrow: 1,
      marginBottom: 10,
      paddingLeft: 10
    },
    
    SubmitButton: {
      backgroundColor: '#0366d6',
      borderRadius: 50,
      color: 'white',
      textAlign: 'center'
    }
  };
  
  export default theme;