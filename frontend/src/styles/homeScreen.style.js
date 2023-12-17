import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeContainer: {
      alignItems: 'right',
    },
    welcomeLine: {
      width: 311,
      top: 130,
      left: 10,
      fontWeight: 'bold',
      color: '#111719',
      fontSize: 60,
      letterSpacing: 1,
    },
    container1: {
      backgroundColor: '#FFFFFF36',
      borderRadius: 30,
      padding: 10,
      width: '75%',
      alignSelf: 'center',
      alignItems: 'center',  // Centrare orizontală
      top: 100,
      startBut: {
          margin: 5,
          alignSelf: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: 17,
          fontFamily: 'serif'
      }
    },
      textContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 120,
      },
      button: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',    
        color: 'white',
        fontSize: 15,
        textShadowColor: 'transparent',
        fontFamily: 'serif',
        textDecorationLine: 'underline'


    },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center',
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
  });

export default styles;