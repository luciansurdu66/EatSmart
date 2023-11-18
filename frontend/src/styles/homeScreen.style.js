import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#B784A7',
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
//     title: {
//         fontSize: 32,
//         color: 'white',
//         fontWeight: 'bold',
//         marginBottom: 20,
//         fontFamily: 'BungeeInlineRegular'
//     },
//     button: {
//       // backgroundColor: '#e74c3c',
//       // paddingVertical: 15,
//       // paddingHorizontal: 30,
//       // borderRadius: 10,
//         margin: 10,
//         alignSelf: 'center',
//         textAlign: 'center',
//         color: 'white',
//         fontSize: 25,
//         fontFamily: 'serif'
//     },
//     buttonText: {
//       color: 'white',
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
    welcomeContainer: {
      alignItems: 'right',
      //justifyContent: 'center',
    },
    welcomeLine: {
      width: 311,
      top: 130,
      left: 10,
      fontFamily: "Tahoma-Bold",
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
          bottom: 100,
      },
      button: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',    
        color: 'white',
        fontSize: 19,
        textShadowColor: 'transparent',
        fontFamily: 'serif',
        textDecorationLine: 'underline'


    },
//       backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', 
//         justifyContent: 'center',
//       },
//       contentContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
    
  });

export default styles;