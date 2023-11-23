import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
    },
    text: {
        fontSize: 20, 
        color: '#9796A1', 
        paddingTop: 30
    },
    textInput:
    {
    top: 40,
     height: 65, 
     borderColor: "gray", 
     borderWidth: 1, 
     marginBottom: 10, 
     width: '90%',
     borderRadius: 10, 
     textAlign: 'center',
     alignSelf: 'center',
     fontFamily: 'serif',
     fontSize: 15,
    },
    resetText:
    {
        fontSize: 40, paddingTop: 150 , paddingLeft: 20},
    button: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',    
        color: '#DA6A00',
},
container1: {
    backgroundColor: '#DA6A00',
    borderRadius: 50,
    padding: 10,
    width: '75%',
    alignSelf: 'center',
    alignItems: 'center',  // Centrare orizontală
    top: 90,
    SendBut: {
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


