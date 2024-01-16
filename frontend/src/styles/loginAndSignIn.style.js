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
        fontSize: 50, paddingTop: 110, paddingLeft: 30, fontFamily: 'serif' },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    CircleShape1: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        backgroundColor: '#EE9B01',
        top: -760,
        right: -40,
        zindex: 20,
        
    },
    CircleShape2: {
        width: 150,
        height: 140,
        borderRadius: 150 / 2,
        backgroundColor: '#DA6A00',
        top: -920,
        right: 35,
        zindex: 20,
        
    },
    CircleShape3: {
        width: 90,
        height: 90,
        borderRadius: 150 / 2,
        backgroundColor: '#C8D2D1',
        top: -620,
        right: 50,
        zindex: 20,
        
    },
    button: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',    
        color: '#EE9B01',
        fontSize: 20,
        textShadowColor: 'transparent',
        fontFamily: 'serif',
        textDecorationLine: 'underline'
       // textShadowColor: 'transparent',
    }, 
    container1: {
        backgroundColor: '#DA6A00',
        borderRadius: 40,
        padding: 7,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',  // Centrare orizontală
        loginBut: {
            margin: 8,
            alignSelf: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            fontFamily: 'serif'
        },
    },
    
});

export default styles;



