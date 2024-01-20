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
     height: 60, 
     borderColor: "gray", 
     borderWidth: 1, 
     marginBottom: 10, 
     width: '90%',
     borderRadius: 20, 
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
        borderRadius: 5,
        alignSelf: 'center',    
        color: '#DA6A00',
},
CircleShape1: {
    width: 110,
    height: 110,
    borderRadius: 150 / 2,
    backgroundColor: '#EE9B01',
    top: -510,
    right: -40,
    zindex: 20,
    
},
CircleShape2: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#DA6A00',
    top: -670,
    right: 35,
    zindex: 20,
    
},
CircleShape3: {
    width: 90,
    height: 90,
    borderRadius: 150 / 2,
    backgroundColor: '#C8D2D1',
    top: -370,
    right: 50,
    zindex: 20,
    
},
container1: {
    backgroundColor: '#DA6A00',
    borderRadius: 50,
    padding: 7,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',  // Centrare orizontală
    top: 70,
    SendBut: {
        margin: 8,
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 23,
        fontFamily: 'serif'
    },
},

});

export default styles;


