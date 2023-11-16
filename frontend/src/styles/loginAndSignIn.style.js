import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
    },
    text: {
        fontSize: 25, 
        color: '#9796A1', 
        paddingTop: 30,
        paddingLeft: 30,
        fontFamily: 'serif'
    },
    textInput:
    {
     height: 65, 
     borderColor: "gray", 
     borderWidth: 1, 
     marginBottom: 10, 
     width: '90%',
     borderRadius: 100, 
     textAlign: 'center',
     alignSelf: 'center',
     fontFamily: 'serif',
     fontSize: 15
    },
    loginText:
    {
        fontSize: 50, paddingTop: 100, paddingLeft: 30, fontFamily: 'serif' },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    containerCircle: {
        position: 'relative'
    },
    CircleShape1: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#68904D',
        top: -500,
        right: 100,
        zindex: 20,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',    
        color: '#DA6A00',
        fontSize: 20,
        textShadowColor: 'transparent',
        fontFamily: 'serif'


    },
    container1: {
        backgroundColor: '#DA6A00',
        borderRadius: 50,
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',  // Centrare orizontală
        loginBut: {
            margin: 10,
            alignSelf: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: 25,
            fontFamily: 'serif'
        },
    },
    
});

export default styles;


