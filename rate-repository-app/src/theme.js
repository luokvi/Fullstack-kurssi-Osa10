import Constants from 'expo-constants';
import { Platform } from 'react-native';

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
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System'
      })
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
      paddingLeft: 10
    },

    body: {
      backgroundColor: '#666',
      height: '100%'
    },

    separator: {
      height: 10,
    },

    //RepositoryItems

    FlexColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '85%'
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
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: 'center'
    },

    LanguageLabel : {
      backgroundColor: '#0366d6',
      width: '30%',
      borderRadius: 20,
    },

    RepositoryItemCard: {
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignSelf: 'center'
    },

    CountersContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },

    orderSelection: {
      backgroundColor: '#fff',
      paddingTop: 5,
      paddingBottom: 5,
    },

    //Sign In Form
    FormContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 20
    },
    
    
    SubmitButton: {
      backgroundColor: '#0366d6',
      borderRadius: 50,
      color: 'white',
      textAlign: 'center',
      alignSelf: 'center',
      width: '75%',
      height: 30,
      paddingTop: 5,
      margin: 'auto'
    },

    //Repository Reviews

    ReviewCard: {
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },

    reviewScore: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#0366d6',
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
    },

    scoreText: {
      color: '#0366d6',
      paddingTop: 14,
      textAlign: 'center',
    },

    reviewText: {
      width: '90%',
      flexGrow: 1
    }
  };
  
  export default theme;